#!/usr/bin/env node
//A Janky Discord.js bot that screams SSTV and in existensial pain
//Quirky ESlint stuff
//@ts-check

//importing modules
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
//importing files
const config = require("./config.json");
const { vsel } = require("./selection.js");

// This is making clients
const client = new Discord.Client();

//on ready join vc channel and start playing a jingle
client.on("ready", () => {
  const channel = client.channels.cache.get(config.channel);

  //set activity to "LISTENING TO all the time; all the time"
  client.user.setActivity("all the time; all the time", { type: "LISTENING" });
  console.info("bot is online!");
  async function connect() {
    //Bot connecting to VC
    const connection = await channel.join();
    console.info("Bot joined the VC");
    //Playing join chime
    const dispatcher = connection.play(fs.createReadStream(path.resolve(`./src/assets/${config.wwv}/${config.wwv}_ident.ogg`), { type: 'ogg/opus' }));
    console.info("Bot should have played the chime");

    //makes it print errors
    dispatcher.on('error', console.error);
  }
  connect();
  vsel();
});
//message handleing for info and status






//This logs some errors to console thus not causing it to crash as node is "quirky"
process.on("unhandledRejection", console.error);
//Logs in the bot pulling from the config file to be made **locally**!
client.login(config.token);