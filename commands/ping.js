const Discord = require('discord.js')
const Subiex = require('../bot.js')

Subiex.registerCommand('ping', 'default', (message, bot) => {
  message.channel.send('Pinging...')
    .then(m => {
      m.edit(`Pong! took \`${m.createdTimestamp - message.createdTimestamp}\`ms`)
    })
}, ['response', "test"], 'Bot Response Test', '[]')
