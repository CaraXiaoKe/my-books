module.exports = {
  apps : [
      {
        name: 'blog',
        cwd : "./packages/blog",
        script: 'yarn build && node ./dist/server/entry.mjs',
        watch: './packages/blog'
      }
    ],
    deploy : {
      production : {
        user : 'SSH_USERNAME',
        host : 'SSH_HOSTMACHINE',
        ref  : 'origin/master',
        repo : 'GIT_REPOSITORY',
        path : 'DESTINATION_PATH',
        'pre-deploy-local': '',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
        'pre-setup': ''
      }
    }
};
