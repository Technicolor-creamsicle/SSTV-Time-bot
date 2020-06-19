#!/usr/bin/env node
//A Janky Discord.js bot that screams SSTV and in existensial pain
//Quirky ESlint stuff


//importing modules
const Discord = require("discord.js");
//const fs = require("fs");

//importing files
const config = require("./config.json");

// This is making clients
const client = new Discord.Client();

const channel = client.channels.cache.get(config.channel);



//on ready join vc channel and start playing a jingle
client.on("ready", () => {
  //set activity to "LISTENING TO all the time; all the time"
  client.user.setActivity("all the time; all the time", {type:"LISTENING"});
  console.info("bot is online!");
  const firstjoin = client.channels.cache.get(config.channel);
  //Bot connecting to VC
  // eslint-disable-next-line no-unused-vars
  firstjoin.join().then(connection => {
      //YeS.(
      console.log("Successfully connected.");
      connection.play('./assets/chime.opus');
    }).catch(e => {
      //Oh no, bad...
      console.error(e);
    });
});


client.on("disconnect", () => {
  const rejoin = channel
  console.warn("Bot has been disconnected... Attempting reconnect!");
  //Rejoins the bot to the vc
  // eslint-disable-next-line no-unused-vars
  rejoin.join().then(connection => {
    //YeS.
    console.log("Successfully connected.");
  }).catch(e => {
    //Oh no, bad...
    console.error(e);
  });
});

//This logs some errors to console thus not causing it to crash as node is "quirky"
process.on("unhandledRejection", console.error);
//Logs in the bot pulling from the config file to be made **locally**!
client.login(config.token);