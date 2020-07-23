const Discord = require('discord.js')
const Subiex = require('../bot.js')

Subiex.registerCommand('restart',(message, bot) => {
process.exit(0)
}, [], '404 - Not Found')
