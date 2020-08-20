const Discord = require('discord.js')
const Subiex = require('../bot.js')
const bot = Subiex.bot
const config = Subiex.config

bot.on('message', message => {
    if (message.content.includes('fuck you bot')) {
    message.channel.send('fuck you too')
}
})