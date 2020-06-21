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

function vsel() {
    //getting the time!
    var vrule = new schedule.RecurrenceRule();
    vrule.second = 1;
    var announce = schedule.scheduleJob(vrule, function(){
        //gets the time 
        let now = Date.now;
        switch (now.getUTCMinute) {
            case 0:
                console.log("minute is 0");
                break;
            case 1:
                console.log("minute is 1");
                break;
            case 2:
                console.log("minute is 2");
                break;
            case 3:
                console.log("minute is 3");
                break;
            case 4:
                console.log("minute is 4");
                break;
            case 5:
                console.log("minute is 5");
                break;
            case 6:
                console.log("minute is 6");
                break;
            case 7:
                console.log("minute is 7");
                break;
            case 8:
                console.log("minute is 0");
                break;
            case 9:
                console.log("minute is 1");
                break;
            case 10:
                console.log("minute is 2");
                break;
            case 11:
                console.log("minute is 3");
                break;
            case 12:
                console.log("minute is 4");
                break;
            case 13:
                console.log("minute is 5");
                break;
            case 14:
                console.log("minute is 6");
                break;
            case 15:
                console.log("minute is 7");
                break;
            case 16:
                console.log("minute is 0");
                break;
            case 17:
                console.log("minute is 1");
                break;
            case 18:
                console.log("minute is 2");
                break;
            case 19:
                console.log("minute is 3");
                break;
            case 20:
                console.log("minute is 4");
                break;
            case 21:
                console.log("minute is 5");
                break;
            case 22:
                console.log("minute is 6");
                break;
            case 23:
                console.log("minute is 7");
                break;
            case 24:
                console.log("minute is 0");
                break;
            case 25:
                console.log("minute is 1");
                break;
            case 26:
                console.log("minute is 2");
                break;
            case 27:
                console.log("minute is 3");
                break;
            case 28:
                console.log("minute is 4");
                break;
            case 29:
                console.log("minute is 5");
                break;
            case 30:
                console.log("minute is 6");
                break;
            case 31:
                console.log("minute is 7");
                break;
            case 32:
                console.log("minute is 0");
                break;
            case 33:
                console.log("minute is 1");
                break;
            case 34:
                console.log("minute is 2");
                break;
            case 35:
                console.log("minute is 3");
                break;
            case 36:
                console.log("minute is 4");
                break;
            case 37:
                console.log("minute is 5");
                break;
            case 38:
                console.log("minute is 6");
                break;
            case 39:
                console.log("minute is 7");
                break;
            case 40:
                console.log("minute is 0");
                break;
            case 41:
                console.log("minute is 1");
                break;
            case 42:
                console.log("minute is 2");
                break;
            case 43:
                console.log("minute is 3");
                break;
            case 44:
                console.log("minute is 4");
                break;
            case 45:
                console.log("minute is 5");
                break;
            case 46:
                console.log("minute is 6");
                break;
            case 47:
                console.log("minute is 7");
                break;
            case 49:
                console.log("minute is 0");
                break;
            case 50:
                console.log("minute is 1");
                break;
            case 51:
                console.log("minute is 2");
                break;
            case 52:
                console.log("minute is 3");
                break;
            case 53:
                console.log("minute is 4");
                break;
            case 54:
                console.log("minute is 5");
                break;
            case 55:
                console.log("minute is 6");
                break;
            case 56:
                console.log("minute is 7");
                break;
            case 57:
                console.log("minute is 0");
                break;
            case 58:
                console.log("minute is 1");
                break;
            case 59:
                console.log("minute is 2");
                break;
            default:
                console.error("something went fucky");
        }
        
      })

}