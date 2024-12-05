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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_16_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxsV3dzN2pZbWsxMkFVV0VBZHRxSVpHMWpHWWJKVVZRUXJDQUJVTlE1WTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJabFdnazdXU0g2N0pWNnRnc2tjUGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWY1ZDJmOGUtZjIzOS00M2EwLTg3YmYtYzg2NjAwMmRmZmQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTE1LFxuICAgICAgMTgwLFxuICAgICAgMTE2LFxuICAgICAgMjE3LFxuICAgICAgMTkzLFxuICAgICAgMTA1LFxuICAgICAgMjM3LFxuICAgICAgMjI2LFxuICAgICAgMjI3LFxuICAgICAgMTUyLFxuICAgICAgMzUsXG4gICAgICAxMzAsXG4gICAgICA1NixcbiAgICAgIDIwMyxcbiAgICAgIDg0LFxuICAgICAgMjAxLFxuICAgICAgMTc4LFxuICAgICAgNjIsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxNzEsXG4gICAgICA0MyxcbiAgICAgIDIzMixcbiAgICAgIDExOSxcbiAgICAgIDkyLFxuICAgICAgMjQxLFxuICAgICAgMTI4LFxuICAgICAgOCxcbiAgICAgIDIxNSxcbiAgICAgIDEyMCxcbiAgICAgIDUyLFxuICAgICAgMzQsXG4gICAgICA4MSxcbiAgICAgIDI4LFxuICAgICAgNixcbiAgICAgIDg2LFxuICAgICAgMTA3LFxuICAgICAgMTMyLFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVERUNDdNMzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTI2MjgwMjc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzM1NTcwODI4MjA2NTY6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV254K1VHRUwzb3lMb0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjIxZ01iMExlMFJuSlY1VDBxSzcwZzVUY2lhSC83RWZPelpTanlwY1VhdzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHZQQnlpYkFSSjNMSFhDaDhFNjNHN3I3cVQ2OHJYRUoyaFRTQUFhKzJ0cThOM00xbUh5eDdROU8weStFaDVodERleWFSd1JTcGF1WnV1cFRqaldSRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT1hIM3dIc2R2UkJFeGNFVTdqOVRySTVQTEV0RzVRR2pvSlV6VnpsdlJiMlNRdDlReGJQR1BENStvU2FaL1lCZE9ZQ1dvNnBCQjdvaU10MU9KVG9RQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMjYyODAyNzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQ0MDU3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVWTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVZOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTEF1VThpNXo0QVJ5bWJadjh0ZC9kNVhCTTdKdEhqb1FOMzBkR2dSN3RHaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODIzNTkzMzYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
