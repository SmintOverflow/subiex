const Discord = require('discord.js')
const Subiex = require('../bot.js')
const axios = require('axios');



Subiex.registerCommand('quote', 'default', (message) => {
  let options = {
    host: 'api.forismatic.com',
    path: '/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?'
  }
  axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
    responseType: 'stream'
  })
    .then(function (response) {
      console.log(response.data.quoteText);
      message.channel.send(response.data.quoteText + " - " + response.data.quoteAuthor).catch(err => console.error(err.stack))
    }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
},['quote', 'qotd'], 'Get a random quote!', '[]') 
