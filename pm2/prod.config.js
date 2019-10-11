module.exports = {
  apps: [{
    name: 'node-api-forwarding-prod',
    script: './server/app.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    instances: 'max',
    autorestart: true,
    output: '/dev/null',
    // max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: '3001'
    }
  }]
}