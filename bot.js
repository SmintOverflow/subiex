const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const yaml = require('js-yaml')
const config = require('./config')
const dotenv = require('dotenv')
dotenv.load()

client.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `!help | Serving ${client.guilds.size} servers`,
      `!help | Serving ${client.users.size} users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "STREAMING",
          url: 'https://www.twitch.tv/smintgaming'
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
});

bot.on("message", (message) => {
    if (message.channel.type === 'dm' && message.author.id != config.botID)
        console.log("[DM]" + message.author.username + ": " + message.content)
});


exports.bot = bot
exports.config = config
exports.commands = {
    master: {},
    moderator: {},
    default: {},
    dm: {}
}

registerCommand = function (name, type, callback, aliases, description, usage) {
    exports.commands[type][name] = {}
    exports.commands[type][name]['aliases'] = aliases
    exports.commands[type][name]['description'] = description
    exports.commands[type][name]['usage'] = usage
    exports.commands[type][name]['process'] = callback
}

var loadScript = (path, reload) => {
    var req = require(path)
    if (reload) {
        console.log('Reloaded script at ' + path)
    } else {
        console.log('Script loaded at ' + path)
    }
}
exports.registerCommand = registerCommand
exports.loadScript = loadScript

var commands = fs.readdirSync('./commands/')
commands.forEach(script => {
    if (script.substring(script.length - 3, script.length) === '.js') {
        exports.loadScript('./commands/' + script)
    }
})

var modules = fs.readdirSync('./modules/')
modules.forEach(script => {
    if (script.substring(script.length - 3, script.length) === '.js') {
        loadScript('./modules/' + script)
    }
})


bot.login(process.env.BOT_TOKEN)
