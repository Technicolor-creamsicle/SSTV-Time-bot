#!/usr/bin/env node
//A Janky Discord.js bot that screams SSTV and in existensial pain
//Quirky ESlint stuff


//importing modules
import Discord from "discord.js";
import fs from "fs";

//importing files
import config from "./config.json";

// This is making clients
const client = new Discord.Client();

//set activity to "LISTENING TO all the time; all the time"
client.user.setActivity("all the time; all the time",{type:"LISTENING"});

//on ready join vc channel and start playing a jingle
client.on("ready", () => {
    const channel = client.channels.get(config.channel);
    channel.join();

});






//Logs in the bot pulling from the config file to be made **locally**!
client.login(config.token);