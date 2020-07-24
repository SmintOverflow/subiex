const Discord = require('discord.js')
const Subiex = require('../bot.js')

Subiex.registerCommand('invite', 'default', (message) => {
  return 'Invite Link: https://discord.com/api/oauth2/authorize?client_id=731067581368369173&permissions=8&scope=bot'
}, ['invitelink'], 'Get invite link to invite this bot to your server', '[]')
