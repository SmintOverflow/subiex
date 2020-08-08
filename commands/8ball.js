const Discord = require('discord.js')
const Subiex = require('../bot.js')

Subiex.registerCommand('8ball', 'default', (message, bot) => {
    const responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes – definitely",
        "You may rely on it",
        "As I see it",
        "Most Likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Better not tell you now",
        "Ask again later",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don’t count on it",
        "Outlook not so good",
        "My sources say no",
        "Very doubtful",
        "My reply is no",
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);

    message.channel.send(responses[randomIndex])
}, ['8ball'], 'Ask The 8Ball!', '[]')