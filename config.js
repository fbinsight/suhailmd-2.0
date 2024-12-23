const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347012628027";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_02_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFUbVdSbnBSYjlidFdldnRuQnJvTjU0SnMyT01lWGVOQ3JiWlEydURKUGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk8tVUZib08tVGZlOHR5b2RNcmJNSEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTk5NzE0N2UtOTVhYS00Mjk2LWE1NGYtMDM0MTQ4NzA4ODQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgOCxcbiAgICAgIDEzNixcbiAgICAgIDEyLFxuICAgICAgMTQzLFxuICAgICAgMTA0LFxuICAgICAgNSxcbiAgICAgIDIzOSxcbiAgICAgIDgyLFxuICAgICAgMjQyLFxuICAgICAgMTE4LFxuICAgICAgMTE4LFxuICAgICAgMjMzLFxuICAgICAgMTI0LFxuICAgICAgMTA4LFxuICAgICAgOTcsXG4gICAgICAyMDIsXG4gICAgICAxODIsXG4gICAgICAxODIsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxMzIsXG4gICAgICAxOTMsXG4gICAgICA2OCxcbiAgICAgIDIwMSxcbiAgICAgIDU3LFxuICAgICAgOTgsXG4gICAgICAyMzUsXG4gICAgICAyMjcsXG4gICAgICAyNSxcbiAgICAgIDIwNSxcbiAgICAgIDE5NyxcbiAgICAgIDg4LFxuICAgICAgMjQyLFxuICAgICAgMjE3LFxuICAgICAgMTc0LFxuICAgICAgMjI0LFxuICAgICAgNTAsXG4gICAgICAyNDksXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlYxTU5BTTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTI2MjgwMjc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMzNTU3MDgyODIwNjU2OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0plbngrVUdFTWlEcDdzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMjFnTWIwTGUwUm5KVjVUMHFLNzBnNVRjaWFILzdFZk96WlNqeXBjVWF3ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvY3h2MS84Q3VTdWllVVFUVWloV1E1S3ZFRXhmajh4andEeXZWMi9hNlJuQUVpZFovN01uMHdqQ0REWFZKNkJWTUdlMFljWllzRGVpZHNnSEZxTU9Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJSHIxZ1RwdnJ4RENtc3VvV2trN3BjbFdvK3NreFVxVWVpZDNDdnIxemkxcGp1bjh0NmNlbkNrMk1ua0FZWGIxc0x4Q1ZXQkhiWlBqVktkaVlYY0NCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEyNjI4MDI3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk4NDEzOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
