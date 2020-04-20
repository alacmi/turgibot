const {
    client,
    RichEmbed
} = require('discord.js');
const ms = require('ms');
const cheerio = require('cheerio');
const request = require('request');
const bot = new Client();
export * from('mute.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'mute':

            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if (!person) return message.reply("couldn\'t find that member");

            let mainrole = message.guild.roles.find(role => role.name === "members");
            let muterole = message.guild.roles.find(role => role.name === "mute");

            if (!muterole) return message.reply("couldn\'t find the mute role");

            let time = args[2];

            if (!time) {
                return message.reply("you didnt specify a time!")
            }

            person.removeRole(mainrole.id);
            person.addRole(muterole.id);

            message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))}`);

            setTimeout(function () {
                person.addRole(mainrole.id);
                person.removeRole(muterole.id);
                message.channel.send(`@${person.user.tag} has been unmuted!`)
            }, ms(time));

            break;
    }
});