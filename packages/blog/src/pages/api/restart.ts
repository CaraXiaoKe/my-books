
import type { APIRoute } from 'astro';
import  { exec } from 'child_process'
export const post: APIRoute =  async ({ request }) => {
  const body = await request.json();
  if(body.ref === 'refs/heads/main'){
    exec('git pull origin main && pm2 restart blog')
  }
  return  new Response(JSON.stringify(true), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}