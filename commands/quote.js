/*
	!deep or !funny command by Klendi Gocci :)
*/

const Discord = require('discord.js')
const Subiex = require('../bot.js')




Subiex.registerCommand('qoute', 'default', (message) => {
    let options = {
        host: 'api.forismatic.com',
        path: '/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?'
    }

    Confax.getHTTP(options).then(body => {
        body = JSON.parse(body)
        message.channel.send(body.quoteText).catch(err => console.error(err.stack))
    })
}, ['quote', 'qotd'], 'Get a random quote!', '[]')