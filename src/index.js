#!/usr/bin/env node
//A Janky Discord.js bot that screams SSTV and in existensial pain
//Quirky ESlint stuff

//importing modules
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
//importing files
const config = require("./config.json");
const schedule = require("node-schedule")
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
    //Playing join chime and setting up voice stuff
    const broadcast = client.voice.createBroadcast();

    var dispatcher = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_ident.ogg`), { type: 'ogg/opus' }));
    connection.play(broadcast)
    console.info("Bot should have played the chime");
    //voice announcements
    //setting the time that the bot starts the voice announcement (seconds)
    var vrule = new schedule.RecurrenceRule();
    vrule.second = 1;
    //This function assembles the audio clips and strings them together to make
    // eslint-disable-next-line no-unused-vars
    var announce = schedule.scheduleJob(vrule, function () {
        //gets the time
        let now = Date.now;
        console.info("bot is making annocement");
        //Making the voice announcements
        var announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_at_the_tone.ogg`), { type: 'ogg/opus'}))
        dispatcher.on("finish", () => {
            announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_${now.getUTCHour}.ogg`), { type: 'ogg/opus' }));
            dispatcher.on("finish", () => {
                announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_hours.ogg`), { type: 'ogg/opus' }));
                broadcast.on("finish", () => {
                    announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_${now.getUTCMinute}.ogg`), { type: 'ogg/opus' }));
                    announcement.on("finish", () => {
                        if (now.getUTCMinute == 1) {
                             announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_minute.ogg`)))
                        } else {
                             announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_minutes.ogg`)))
                        }
                        announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_and.ogg`), { type: 'ogg/opus' }));
                        announcement.on("finish", () => {
                            announcement = broadcast.play(fs.createReadStream(path.resolve(`./src/assets/${config.voice}/${config.voice}_30.ogg`), { type: 'ogg/opus' }));
        })})})})})})

    //makes it print errors
    dispatcher.on('error', console.error);
  }

  connect();
});
//message handleing for info and status






//This logs some errors to console thus not causing it to crash as node is "quirky"
process.on("unhandledRejection", console.error);
//Logs in the bot pulling from the config file to be made **locally**!
client.login(config.token);