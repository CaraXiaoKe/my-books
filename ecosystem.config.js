module.exports = {
  apps : [
    {
      name: 'blog',
      cwd : "./packages/blog",
      script: 'yarn install && yarn build && node ./dist/server/entry.mjs',
      // watch: '.' // 不起作用
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
