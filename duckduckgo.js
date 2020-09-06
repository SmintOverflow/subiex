const Discord = require('discord.js')
const Subiex = require('./bot.js')

Subiex.registerCommand('duckduckgo', 'default', (message, bot) => {
    if (message.content.length == 0) {
        message.channel.send({
            embed: {
                color: 0xfc1846,
                description: '**' + 'Error, empty argument' + '**',
            }
        });
        return;
    }
    message.channel.send(":zap: **DuckDuckGo Brrr** :zap: ")
    message.channel.send('http://duckduckgo.com/?q=' + encodeURIComponent(message))
}, ['privategoogle', 'ddg', 'duckduckgobrrr'], 'Generate a duckduckgo (basically google without trackers) link', '<expression>')