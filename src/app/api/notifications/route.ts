import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const requests = await db.playRequest.findMany({
      where: {
        receiverId: session.user.id,
        status: 'Pending',
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            profileImageUrl: true,
            address: true,
            sports: {
              include: { sport: { select: { name: true } } },
              take: 1,
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ requests });
  } catch (error) {
    console.error('Notifications API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
