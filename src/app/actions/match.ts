'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth';

export async function joinMatch(matchId: string) {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
  const userId = session.user.id;

  try {
    await db.matchParticipant.upsert({
      where: {
        matchId_userId: {
          matchId,
          userId,
        },
      },
      create: {
        matchId,
        userId,
        status: 'Accepted',
      },
      update: {
        status: 'Accepted',
      },
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Failed to join match:', error);
    return { success: false, error: 'Failed to join match' };
  }
}

export async function postGame(formData: {
  title: string;
  sportId: string;
  scheduledTime: Date;
  venueName: string;
  venueType: string;
  maxPlayers: number;
  latitude: number;
  longitude: number;
  address: string;
}) {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
  const userId = session.user.id;

  try {
    await db.match.create({
      data: {
        title: formData.title,
        sportId: formData.sportId,
        scheduledTime: formData.scheduledTime,
        venueName: formData.venueName,
        venueType: formData.venueType,
        maxPlayers: formData.maxPlayers,
        latitude: formData.latitude,
        longitude: formData.longitude,
        address: formData.address,
        creatorId: userId,
        status: 'Open',
      },
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Failed to post game:', error);
    return { success: false, error: 'Failed to post game' };
  }
}

export async function sendPlayRequest(receiverId: string) {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
  const userId = session.user.id;

  try {
    // Prevent duplicate pending requests
    const existing = await db.playRequest.findFirst({
      where: { senderId: userId, receiverId, status: 'Pending' },
    });
    if (existing) return { success: false, error: 'Request already sent' };

    await db.playRequest.create({
      data: {
        senderId: userId,
        receiverId,
        status: 'Pending',
      },
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Failed to send play request:', error);
    return { success: false, error: 'Failed to send play request' };
  }
}

export async function respondToPlayRequest(requestId: string, action: 'accept' | 'reject') {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');

  try {
    await db.playRequest.update({
      where: { id: requestId },
      data: { status: action === 'accept' ? 'Accepted' : 'Rejected' },
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Failed to respond to play request:', error);
    return { success: false, error: 'Failed to respond' };
  }
}
