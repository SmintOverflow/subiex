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
    if (message.content.length == 0) {
        message.channel.send({
            embed: {
                color: 0xfc1846,
                description: '**' + 'Error, you asked nothing to the 8ball, why?' + '**',
            }
        });
        return;
    }
    if (message.content == "is smint gae?") {
        message.channel.send("are you gae?");
        return;
    }
    message.channel.send(responses[randomIndex])
}, ['eightball'], 'Ask The 8Ball!', '[]')