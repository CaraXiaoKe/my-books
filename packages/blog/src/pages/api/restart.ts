
import type { APIRoute } from 'astro';
import fs from 'fs'
// import  { exec } from 'child_process'
export const post: APIRoute =  async ({ request }) => {
  // exec('git pull origin main && pm2 restart blog')
  const body = await request.json();
  fs.writeFileSync( './info.log', JSON.stringify(body), {
    encoding: 'utf-8'
  })
  return  new Response(JSON.stringify(true), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}


export const get: APIRoute =  ({ request }) => {
  // exec('git pull origin main && pm2 restart blog')
  return  new Response(JSON.stringify(true), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}