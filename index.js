console.log('Connecting...');
  const SETTING = require('./lib/validator/config')
const config = require ('./config.js')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif.js')

  const googleTTS = SETTING['modul']['google-tts-api']
  const pino = SETTING['modul']['pino']
  const chalk = SETTING['modul']['chalk']
  const fs = SETTING['modul']['fs']
  const jimp = SETTING['modul']['jimp']
  const path = SETTING['modul']['path']
  let { Boom } = SETTING['modul']['boom']
  const PhoneNumber = SETTING['modul']['phonenumber']
  const NodeCache = SETTING['modul']['nodecache']
  const readline = SETTING['modul']['readline']
  const { move } = require(SETTING['file']['move'])
  const { smsg } = require(SETTING['file']['yanz'])
  let { default: makeWASocket, useMultiFileAuthState, jidDecode, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, proto, getAggregateVotesInPollMessage } = SETTING['modul']['baileys']
  const { color, bgcolor, ConsoleLog, biocolor } = require(SETTING['file']['color'])

//Session id connect?

const fs = require('fs')
const {writeFile} = require('fs/promises')
const PastebinAPI = require("pastebin-js"),
  pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");
module.exports = {
async MakeSession(session_id, authFile) {
    return new Promise((resolve, reject) => {
        code = session_id.replace(/KIND-MD/g, "");
        code = Buffer.from(code, "base64").toString("utf-8");
          pastebin
            .getPaste(code)
            .then(async function (data) {
              if (!fs.existsSync(authFile)) {
               await writeFile(authFile, data);
               resolve(true)
              }
            })
            .fail(function (err) {
                reject(err)
              console.log(err);
            });  
    })

//End session id

MakeSession()

const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
}

//store
  const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
 const web = require ('./lib/server')
//pairingCode
  const pairingCode = process.argv.includes("--pairing-code")
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const question = (text) => new Promise((resolve) => rl.question(text, resolve))
     //=======================================================//
                               /* { function } */
     //=======================================================//
     const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
     }   
             
         async function operate () { 
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
              let { version } = fetchLatestBaileysVersion()
	      const msgRetryCounterCache = new NodeCache()
           
              const client = makeWASocket({ 
		      logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['X-BOT-MD', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                }
            }
        })
        store.bind(client.ev)
setInterval(() => {
    store.writeToFile(__dirname+"/store.json");
  }, 30 * 1000);
           

                /** plugins **/
             let pluginFolder = path.join(__dirname, './plugins')
              let pluginFilter = filename => /\.js$/.test(filename)
              global.plugins = {}
              for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
               try {
                     global.plugins[filename] = require(path.join(pluginFolder, filename))
                } catch (e) {
                     console.log(e)
                     delete global.plugins[filename]
               }
             }
             console.log(Object.keys(global.plugins))
     
               //=======================================================//
                                        /* { client.ev.on } */
               //=======================================================//
                
                 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*// events.commands.map(async(command) => {
          
//mmmmmmm

  

               client.decodeJid = (jid) => {
                           if (!jid) return jid
                                if (/:\d+@/gi.test(jid)) {
                                let decode = jidDecode(jid) || {}
                            return decode.user && decode.server && decode.user + '@' + decode.server || jid
                     } else return jid
                 }    
                //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
               client.getName = (jid, withoutContact  = false) => {
                id = client.decodeJid(jid)
                withoutContact = client.withoutContact || withoutContact 
                 let v
                   if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
                    v = store.contacts[id] || {}
                    if (!(v.name || v.subject)) v = client.groupMetadata(id) || {}
                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
                    })
                    else v = id === '0@s.whatsapp.net' ? {
                     id,
                     name: 'WhatsApp'
                     } : id === client.decodeJid(client.user.id) ?
                      client.user :
                      (store.contacts[id] || {})
                      return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
                 }
           //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
       client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

  
    client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
                            }
                 client.sendContact = async (jid, kon, quoted = '', opts = {}) => {
                	let list = []
                 	for (let i of kon) {
     	               list.push({
     	            	displayName: await client.getName(i),
     	             	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client.getName(i)}\nFN:${await client.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:"kriz@gmail.com"\nitem2.X-ABLabel:Email\nitem3.URL:"https://instagram.com/krishnadas.kriz"\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            	       })                	}
                	
              	client.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
               }
               
              

           //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                       
      // pairing by @whiskeysockets/baileys
      
    if (pairingCode && !client.authState.creds.registered) {
      const phoneNumber = await question(`Please type your WhatsApp number : `)
      let code = await client.requestPairingCode(phoneNumber)
      console.log(`Your Pairing Code : ${code}`)
    }            
               client.ev.on('connection.update', async (update) => {
                   let { Connecting } = require("./connection/systemConnext.js")        
                         Connecting({update, client, Boom, DisconnectReason, sleep, operate}) 
                })      

               //save session 
                 client.ev.on('creds.update', saveCreds);   
                 store.bind(client.ev) 
               
                 client.ev.on('messages.upsert', async ({ messages }) => {
                      const msg = messages[0]; 
                       if (!msg.message) return
                           if (msg.key.remoteJid === 'status@broadcast' && global.statusread == true) {
			                	setTimeout(() => {
			    	             client.readMessages([msg.key])
					             let typ = getContentType(msg.message)
				    	         console.log((/protocolMessage/i.test(typ)) ? `${msg.key.participant.split('@')[0]} Deleted status❗` : 'View user status : ' + msg.key.participant.split('@')[0]);
				                }, 500);
	                          }
                           const from = msg.key.remoteJid  
                           const type = getContentType(msg.message)
                           const textMessage = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
                          move(client, msg, store) 
                          smsg(client, msg, store) 
                     require('./main/X-BOT-MD.js')(msg, client, from, store) 
                  })
                  
                  
//*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                       
                // respon polling
                
async function getMessage(key) {
  	if (store) {
  		const msg = await store.loadMessage(key.remoteJid, key.id)
  		return msg?.message
      }  
      return {
      	conversation: "Hai Im X bot"
      }  
  }
  
  client.ev.on('messages.update', async chatUpdate => {
  	for (const { key, update } of chatUpdate) {
  		if (update.pollUpdates && key.fromMe) {
  			const pollCreation = await getMessage(key)
  			if(pollCreation) {
  				const pollUpdate = await getAggregateVotesInPollMessage({
  					message: pollCreation,
  					pollUpdates: update.pollUpdates,
  			    })		
  		        var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name	    
  		        if (toCmd == undefined) return
  		        var prefCmd = prefix+toCmd
  		        client.appenTextMessage(prefCmd, chatUpdate)
  		    }
  		 }
  	}
  })	           
                  
client.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return client.sendMessage(jid, { poll: { name, values, selectableCount }}) }               

//*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                       
                // sendText
client.sendText = (jid, text, quoted = "", options) =>
client.sendMessage(jid, { text: text, ...options }, { quoted });
          

         
       //=======================================================//
                                 /* { starting } */
       //=======================================================//
           process.on('uncaughtException', console.error)
      }
operate ()
web ()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
