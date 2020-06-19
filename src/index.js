#!/usr/bin/env node
//A Janky Discord.js bot that screams SSTV and in existensial pain
//Quirky ESlint stuff


//importing modules
const Discord = require("discord.js");
const fs = require("fs");

//importing files
import config from "./config.json";

// This is making clients
const client = new Discord.Client();

//set activity to "LISTENING TO all the time; all the time"
client.user.setActivity("all the time; all the time",{type:"LISTENING"});

//on ready join vc channel and start playing a jingle
client.on("ready", () => {
    const channel = client.channels.get(config.channel);
    // eslint-disable-next-line no-unused-vars
    channel.join().then(connection => {
        //YeS, 
        console.log("Successfully connected.");
      }).catch(e => {
        // Oh no, bad...
        console.error(e);
      });
});




//This logs some errors to console thus not causing it to crash as node is "quirky"
process.on("unhandledRejection", console.error);
//Logs in the bot pulling from the config file to be made **locally**!
client.login(config.token);