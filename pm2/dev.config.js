module.exports = {
  apps: [{
    name: 'node-api-forwarding-dev',
    script: './server/app.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    autorestart: true,
    watch: './server',
    output: '/dev/null',
    // max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: '3001'
    }
  }]
}