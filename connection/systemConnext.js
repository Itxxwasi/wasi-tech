//kriz
 require('../config')
let { loading } = require('./starting')

const Connecting = async ({update, client, Boom, DisconnectReason, sleep, operate, msg}) => {

      const { connection, lastDisconnect } = update
      if (connection === 'connecting'){
             console.log('INFO', update) 
             }  
       //response if there is a failure/error in connection                       	             
       if (connection === 'close') {
         let messageconnect = new Boom(lastDisconnect?.error)?.output.statusCode
            if (messageconnect === DisconnectReason.badSession) { 
               console.log(`Sorry, it looks like the session file is disabled. Please re-scan🙏`)
               client.logout();
               console.log('Mengkoneksikan ulang dalam 10 detik....')
               setTimeout( () => {
                 operate();
               }, 10000)
              } else if (messageconnect === DisconnectReason.connectionClosed) { 
               console.log("Connection lost, trying to reconnect🔄"); 
               operate(); 
              } else if (messageconnect === DisconnectReason.connectionReplaced) { 
               console.log("Another connection is replaced, please close this connection first");    
              process.exit(); 
              } else if (messageconnect === DisconnectReason.restartRequired) { 
               console.log("An error occurred, reconnecting🔄"); 
               setTimeout( () => {
                 operate();
               }, 10000)
              } else if (messageconnect === DisconnectReason.connectionLost) { 
               console.log("Connection lost from the web, trying to reconnect🔄"); 
               setTimeout( () => {
                 operate();
               }, 10000)             
              } else if (messageconnect === DisconnectReason.loggedOut) { 
              console.log(`Device is out, please re-scan🔄`);    
              process.exit();               
              } else if (messageconnect === DisconnectReason.timedOut) { 
               console.log("Connection reached the limit, please reload🔄"); 
               operate(); 
             } else client.end(`Reason : ${messageconnect}|${connection}`)
        }  
       if (connection === 'open'){         
         //clearing logs in terminal
          console.clear()          
           //start progress
            loading()
             //silent for 5.5 seconds
              await sleep(5500)
               //displays information that it is connected
         for (let i of ownernumber) {
                        let kunna = ` *_x-ʙᴏᴛ-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ_* \n\n _*ᴛᴇᴀᴍ : ᴛᴇᴀᴍ ᴇx-ʙᴏᴛ-ᴢ*_\n\n_*ᴍᴏᴅᴇ*_ :  _*${global.worktype}*_\n\n_*ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱʀᴇᴀᴅ*_ : _*${global.statusread}*_\n\n_*ᴀʟᴡᴀyꜱ ᴏɴʟɪɴᴇ : ${global.alwaysonline}*_\n\n_*ᴘʀᴇғɪx*_ : ${global.prefix}`
client.sendMessage(i + "@s.whatsapp.net", {text : kunna,
contextInfo: { externalAdReply: {
title: "X-BOT-MD",
sourceUrl: "https://chat.whatsapp.com/JjzEUDkJgke1vPGK3GAvG6",
mediaUrl: "https://instagram.com/krishnadas.kriz",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: "https://i.imgur.com/IIHEyLI.jpg" }}}, {quoted: msg})}}
          
       
                console.log('connected 🗿🙌🏻') 
         }
 
   
   module.exports = { Connecting }       