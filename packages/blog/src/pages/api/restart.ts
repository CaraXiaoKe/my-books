
import type { APIRoute } from 'astro';
import fs from 'fs'
import path from 'path'
// import  { exec } from 'child_process'

export const post: APIRoute =  ({ request }) => {
  // exec('git pull origin main && pm2 restart blog')
  fs.writeFileSync(path.join(__dirname, './info.log'), JSON.stringify(request.body), {
    encoding: 'utf-8'
  })
  return  new Response(JSON.stringify(true), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}