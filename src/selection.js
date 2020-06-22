#!/usr/bin/env node
//A Janky Discord.js bot that screams SSTV and in existensial pain
//Quirky ESlint stuff
/* eslint-disable no-unused-vars */

//importing modules
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
const schedule = require("node-schedule")
//importing files
const config = require("./config.json");
const connection = require("./index.js");
const { connect } = require("http2");


//voice announcement function
function vsel() {
    //setting the time that the bot starts the voice announcement (seconds)
    var vrule = new schedule.RecurrenceRule();
    vrule.second = 1;
    //This function assembles the audio clips and strings them together to make
    var announce = schedule.scheduleJob(vrule, function () {
        //gets the time
        let now = Date.now;

        //Making the voice announcements
        const attone = connection.play(fs.createReadStream(path.resolve(`./src/assets/${config.wwv}/${config.wwv}_at_the_tone.ogg`), { type: 'ogg/opus'}))
        const hr = connection.play(fs.createReadStream(path.resolve(`./src/assets/${config.wwv}/${config.wwv}_${now.getUTCHour}.ogg`), { type: 'ogg/opus' }));
        const hours = connection.play(fs.createReadStream(path.resolve(`./src/assets/${config.wwv}/${config.wwv}_hours.ogg`), { type: 'ogg/opus' }));
        const min = connection.play(fs.createReadStream(path.resolve(`./src/assets/${config.wwv}/${config.wwv}_${now.getUTCMinute}`)))
        if (now.getUTCMinute == 1) {
            
        } else {
            
        }




    });

}