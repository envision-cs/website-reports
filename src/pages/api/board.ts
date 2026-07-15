import { env } from 'cloudflare:workers';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const cloudflareEnv = env as any;
  if (!cloudflareEnv || !cloudflareEnv.KV) {
    return new Response(JSON.stringify({ error: 'KV namespace KV not bound.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Optional Secret Key Auth
  const secret = cloudflareEnv.SYNC_SECRET;
  if (secret) {
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== `Bearer ${secret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  try {
    const data = await cloudflareEnv.KV.get('board:default', 'text');
    if (!data) {
      return new Response(JSON.stringify({ cards: [], updatedAt: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(data, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  const cloudflareEnv = env as any;
  if (!cloudflareEnv || !cloudflareEnv.KV) {
    return new Response(JSON.stringify({ error: 'KV namespace KV not bound.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Optional Secret Key Auth
  const secret = cloudflareEnv.SYNC_SECRET;
  if (secret) {
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== `Bearer ${secret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  try {
    const body = await request.json();
    if (!body || !Array.isArray(body.cards) || typeof body.updatedAt !== 'number') {
      return new Response(JSON.stringify({ error: 'Invalid body shape. Expected { cards: Card[], updatedAt: number }' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await cloudflareEnv.KV.put('board:default', JSON.stringify(body));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
