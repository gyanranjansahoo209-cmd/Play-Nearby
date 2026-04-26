'use server';

import { db } from '@/lib/db';
import { getSession, logout } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

export async function updateProfileAction(formData: FormData) {
  const session = await getSession();
  if (!session) return { error: 'Unauthorized' };

  const name = formData.get('name') as string;
  const bio = formData.get('bio') as string;
  const profileImageUrl = formData.get('profileImageUrl') as string;
  const address = formData.get('address') as string;
  const privacyRadius = parseInt(formData.get('privacyRadius') as string) || 1000;
  
  // Handle arrays/JSON
  const availabilityDays = formData.getAll('availabilityDays') as string[];
  const availabilityTimes = formData.getAll('availabilityTimes') as string[];
  const playingLocations = formData.getAll('playingLocations') as string[];

  const availability = JSON.stringify({
    days: availabilityDays,
    times: availabilityTimes
  });

  if (!name) return { error: 'Name is required' };

  try {
    await db.user.update({
      where: { id: session.user.id },
      data: {
        name,
        bio,
        profileImageUrl,
        address,
        privacyRadius,
        availability,
        playingLocations: JSON.stringify(playingLocations),
      },
    });

    revalidatePath('/profile');
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Update profile error:', error);
    return { error: 'Failed to update profile' };
  }
}

export async function changePasswordAction(formData: FormData) {
  const session = await getSession();
  if (!session) return { error: 'Unauthorized' };

  const currentPassword = formData.get('currentPassword') as string;
  const newPassword = formData.get('newPassword') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!currentPassword || !newPassword || !confirmPassword)
    return { error: 'All fields are required' };
  if (newPassword !== confirmPassword)
    return { error: 'New passwords do not match' };
  if (newPassword.length < 8)
    return { error: 'New password must be at least 8 characters' };

  try {
    const user = await db.user.findUnique({ where: { id: session.user.id } });
    if (!user) return { error: 'User not found' };

    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) return { error: 'Current password is incorrect' };

    const hashed = await bcrypt.hash(newPassword, 10);
    await db.user.update({
      where: { id: session.user.id },
      data: { password: hashed },
    });

    return { success: true };
  } catch (error) {
    console.error('Change password error:', error);
    return { error: 'Failed to change password' };
  }
}

export async function updateDarkModeAction(darkMode: boolean) {
  const session = await getSession();
  if (!session) return { error: 'Unauthorized' };

  try {
    await db.user.update({
      where: { id: session.user.id },
      data: { darkMode },
    });
    return { success: true };
  } catch (error) {
    console.error('Update dark mode error:', error);
    return { error: 'Failed to update preference' };
  }
}

export async function deleteAccountAction() {
  const session = await getSession();
  if (!session) return { error: 'Unauthorized' };

  try {
    const userId = session.user.id;

    // Delete dependent records first
    await db.matchParticipant.deleteMany({ where: { userId } });
    await db.playRequest.deleteMany({
      where: { OR: [{ senderId: userId }, { receiverId: userId }] },
    });
    await db.userSport.deleteMany({ where: { userId } });
    // Matches created by user
    const createdMatches = await db.match.findMany({ where: { creatorId: userId } });
    for (const match of createdMatches) {
      await db.matchParticipant.deleteMany({ where: { matchId: match.id } });
    }
    await db.match.deleteMany({ where: { creatorId: userId } });
    await db.user.delete({ where: { id: userId } });

    await logout();
  } catch (error) {
    console.error('Delete account error:', error);
    return { error: 'Failed to delete account' };
  }

  redirect('/');
}
