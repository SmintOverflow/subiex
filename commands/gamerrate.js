const Subiex = require('../bot.js')
const config = require('../config')
const Utils = require('../modules/utils')

Subiex.registerCommand('gamerrate', 'default', (message, bot) => {

    let myMention = message.mentions.users.array()[0]

    const anti = '289491460443865088'

    const randomnumber = Math.floor(Math.random() * 101)
    if (message.content === '') {
        message.channel.send({
            embed: {
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL
                },
                title: 'GamerR8 Scanner',
                thumbnail: {
                    url: message.author.avatarURL
                },
                description: `${message.author.username} is ${randomnumber}% gamer!`,
                color: 9384170,
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL
                }
            }
        })
    } else if (myMention.id === config.master) {
        const random = Math.floor(Math.random() * 2)

        console.log('It is smint')
        message.channel.send({
            embed: {
                author: {
                    name: myMention.username,
                    icon_url: myMention.avatarURL
                },
                title: 'GamerR8 Scanner',
                thumbnail: {
                    url: myMention.avatarURL
                },
                description: `${myMention.username} is 69696969% gamer!`,
                color: 9384170,
                timestamp: new Date(),
                footer: {
                    icon_url: myMention.avatarURL
                }
            }
        })
    } else if (myMention.id === anti) {
        const random = Math.floor(Math.random() * 200000)

        console.log('It is klendi')
        message.channel.send({
            embed: {
                author: {
                    name: myMention.username,
                    icon_url: myMention.avatarURL
                },
                title: 'GamerR8 Scanner',
                thumbnail: {
                    url: myMention.avatarURL
                },
                description: `${myMention.username} is 69696969% gamer!`,
                color: 9384170,
                timestamp: new Date(),
                footer: {
                    icon_url: myMention.avatarURL
                }
            }
        })
    } else if (myMention.id !== config.master) {
        message.channel.send({
            embed: {
                author: {
                    name: myMention.username,
                    icon_url: myMention.avatarURL
                },
                title: 'GamerR8 Scanner',
                thumbnail: {
                    url: myMention.avatarURL
                },
                description: `${myMention.username} is ${randomnumber}% gamer!:`,
                color: 9384170,
                timestamp: new Date(),
                footer: {
                    icon_url: myMention.avatarURL
                }
            }
        })
    }
}, ['gamer', 'gamerr8'], 'Scan Someones Gamerrate', 'name "[Text Here]"')