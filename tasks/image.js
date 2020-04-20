const {
    client,
    RichEmbed
} = require('discord.js');
const bot = new Client();
export * from('image.js');
import {
    Client
} from 'discord.js';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'image':

            image(message);

            break;
    }
});


function image(message) {

    var options = {
        url: "https://results.dogpile.com/serp?qc=images&q=" + "memes",
        method: "get",
        headers: {
            "accept": "text/html",
            "user-agent": "Chrome"
        }
    };

    request(options, function (Error, response, responsebody) {

        if (err) {
            return;
        }


        $ = cheerio.load(responsebody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("herf"));

        console.log(urls);
        if (!urls.length) {

            return;
        }

        //send result
        message.channel.send(urls[Math.floor(math.random() * urls.length)] + " " + message.guild.members.random());
    });



}