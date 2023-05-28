
import type { APIRoute } from 'astro';

import  { exec } from 'child_process'

export const get:APIRoute =  () => {
  exec('git pull origin main && pm2 restart blog')
  return  new Response(JSON.stringify(true), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}