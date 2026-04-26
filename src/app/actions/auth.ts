'use server';

import { db } from '@/lib/db';
import { login, logout } from '@/lib/auth';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

export async function registerAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!name || !email || !password) {
    return { error: 'All fields are required' };
  }

  try {
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: 'Email already registered' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await login({ id: user.id, email: user.email, name: user.name });
    // Success - will redirect in the component or here
  } catch (error) {
    console.error('Registration error:', error);
    return { error: 'Something went wrong' };
  }

  redirect('/dashboard');

}

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'All fields are required' };
  }

  try {
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return { error: 'Invalid email or password' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: 'Invalid email or password' };
    }

    await login({ id: user.id, email: user.email, name: user.name });
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Something went wrong' };
  }

  redirect('/dashboard');
}

export async function logoutAction() {
  await logout();
  redirect('/');
}
