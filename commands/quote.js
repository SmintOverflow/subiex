/*
	!deep or !funny command by Klendi Gocci :)
*/

const Discord = require('discord.js')
const Subiex = require('../bot.js')
const https = require('https');



Subiex.registerCommand('quote', 'default', (message) => {
  let options = {
    host: 'api.forismatic.com',
    path: '/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?'
  }

  https.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).quoteText);
      message.channel.send(JSON.parse(data).quoteText).catch(err => console.error(err.stack))
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

})
}, ['quote', 'qotd'], 'Get a random quote!', '[]')