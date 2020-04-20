const discord = require('discord.js');
const bot = new discord.Client();

const token = process.env.token;

const PREFIX = '^';

var Version = '1.1.0';

bot.on('ready', () => {
    console.log('this bot is online!');
    bot.user.setActivity('zoom with class', {
        type: 'PLAYING'
    });
})

bot.on(`guildMemberAdd`, member => {

    const channel = member.guild.channels.find(channel = channel.name === "『👋』welocme");
    if (!channel) return;

    channel.send(`Welcome to our server ${member}, please read the rules in the rules channel!`)
});

import('poll.js');
import('ping.js');
import('website.js');
import('info.js');
import('inf.js');
import('clear.js');
import('embed.js');
import('image');
import('kick');
import('mute');

bot.login(token);