require('../config')
const SETTING = require('../lib/validator/config')
 const keywords = require('../lib/validator/allKeywords')
const { VERSION } = require('../sparky')
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
//=======================================================//
                      /* { module } */
  //=======================================================//
const { cheerio } = require("cheerio")
  let modul = SETTING['modul'];
  let getreq = SETTING['file'];
  const chalk = modul['chalk'];
  const fs = modul['fs'];
  const util = modul['util'];
  const https = modul['https'];
  const axios = modul['axios'];
  const ytsr = modul['ytsr'];
  const yts = modul['yts']
  const { spawn, exec } = modul['child'];
  const { downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, getLastMessageInChat, MessageType, generateWAMessageFromContent, proto } = modul['baileys'];
  const moment = modul['time'];
  const time = moment.tz('Asia/Kolkata')                            

const ytdl = require("clash-wa-bot-ytdl");

var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
const ffmpeg = require("fluent-ffmpeg");
//const { updateProfilePicture } = require("wa-bot-functions");
const fetch = require("node-fetch")

const { randomFancy, tiny } = require("@toxickichux/fancytext");
  const qrcode = modul['qrcode'];
  const QrCode = modul['QrCode'];
  const qr = new QrCode();
  const ikyyClient = modul['ikyy'];
  const Ikyy = new ikyyClient();
  const { sizeFormatter } = modul['sizeFormater']
  const speed = modul['speed'];
  const request = modul['request'];
  const path = modul['path'];
  const dl = modul['bochil'];
  const { Configuration, OpenAIApi } = modul["openai"]
  const configuration = new Configuration({ apiKey : SETTING["api"]["openai"][0] });
  const openai = new OpenAIApi(configuration);  

/*<--------------------( external function )--------------------->*/
const { instagram } = require('.' + getreq['scrapp'])

   //=======================================================//
                       /* { js } */
   //=======================================================//
 
  const { color, bgcolor, ConsoleLog, biocolor } = require('.' + getreq['color'])
  const { reSize, runtime, getBuffer, getRandom, pickRandom, fetchJson, fetchBuffer, isUrl, genMath, formatp} = require('.' + getreq['funct'])
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('.' + getreq['exif'])
  const { toAudio } = require ("../lib/converter")
  //=======================================================//
                       /* { media } */
  //=======================================================//

  
  
//=======================================================//
                       /* { exports this function } */
//=======================================================//

module.exports = async(msg, client, from, store) => {
    
    //=======================================================//
                          /* { detect } */  
    //=======================================================//

const got = require("got");
const fs = require("fs");
//const { PluginDB, installPlugin } = //require("../../assets/database").Plugins;
const sparky = global.sparky
   const isGrouP = msg.key.remoteJid.endsWith('@g.us')
   const sender = isGrouP ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
   const pushname = msg.pushName || "No Name"
   const CMD = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''.slice(1).trim().split(/ +/).shift().toLowerCase 
const prefix = global.prefix
	 const ownername = global.ownername
  const botname = global.botname
  const thumb = global.thumb
  const ownernumber = global.ownernumber
  var budy = (typeof msg.text == 'string' ? msg.text : '')
   const chatmessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.xtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
   const ordermessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? msg.message.templateButtonReplyMessage.selectedId : ''   
   const chats = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''   	
   const args = ordermessage.trim().split(/ +/).slice(1)         
   const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   const command = ordermessage.slice(1)
   const text = q = args.join(" ")
  const teks = text ? text : msg.quoted && msg.quoted.text
   const fatkuns = (msg.quoted || msg)
   const quoted = (fatkuns.xtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.xtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.xtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : msg.quoted ? msg.quoted : msg
   const isCmd = ordermessage.startsWith(prefix)   
   const content = JSON.stringify(msg.message)
   const orderPlugins = isCmd ? ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase() : null
   const isGroup = from.endsWith(keywords[0]['chats'][1])
   const botNumber = client.user.id.split(':')[0] + keywords[0]['chats'][0]
   const mime = (quoted.msg || quoted).mimetype || '' 
   const isMedia = /image|video|sticker|audio/.test(mime)
   const itulho = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid  
   const isOwner = [botNumber, ...global.ownernumber].map(jid => jid.replace(/[^0-9]/g, '') + keywords[0]['chats'][0]).includes(itulho)
   const groupMetdata = isGroup ? await client.groupMetadata(from) : ''
         client.groupMembers = isGroup ? groupMetdata.participants : ''
         client.groupName = isGroup ? await groupMetdata.subject : ''   
         client.groupAdmins = isGroup ? msg.getGroupAdmins(client.groupMembers) : ''
   const isBotGroupAdmins = client.groupAdmins.includes(botNumber) || false
   const isGroupAdmins = client.groupAdmins.includes(msg.sender)

const chudo = ["917594898804","917012984396","919961857267"]
   
   //=======================================================//
                    /* { quoted } */  
    //=======================================================//

const isWebp = (msg.xtype === 'imageMessage' || msg.xtype === 'videoMessage')
const isImage = (msg.xtype == 'imageMessage')
const isVideo = (msg.xtype == 'videoMessage')
const isSticker = (msg.xtype == 'stickerMessage')
const isQuotedMsg = (msg.xtype == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const isQuotedTag = isQuotedMsg ? content.includes('mentionedJid') ? true : false : false
const isQuotedReply = isQuotedMsg ? content.includes('Message') ? true : false : false
 
   //=======================================================//
                    /* { participant mentions } */   
   //=======================================================//

   const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : false 
  //=======================================================//
                          /* { function } */   
  //=======================================================//

   const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
   }
                   
    const formatSize = sizeFormatter({
 	std: "JEDEC",
	decimalPlaces: "2",
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
   }); 

                                                                                                       adreply = async (teks) => {                                           
            client.sendMessage(from, { text: teks, contextInfo: { externalAdReply: {

title: global.botname,

sourceUrl: global.url,

mediaUrl: global.url,

mediaType: 1,

showAdAttribution: true,

renderLargerThumbnail: false,

thumbnailUrl: global.thumb }}}, { quoted : msg });
                                                                                                         }

                                                                                                const sendvn = async (teks) => {
client.sendMessage(from, {audio: {url: teks},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0],mimetype: 'audio/mpeg'},{quoted:msg})		
} 
  
   //functions
 
async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};

   //=======================================================//      
         /* { stiker limit } */
   //=======================================================//

const sendLimit = () => {
            return client.sendMessage(from, {
                sticker: fs.readFileSync('../storage/limit.webp')
            }, {
                quoted: msg
            })
        }
        

                                      
   

//auto recording all
    if (global.autoRecord) { if (from) { client.sendPresenceUpdate('recording', from) }
}
//autotyper all
  if (global.autoTyping) { if (from) { client.sendPresenceUpdate('composing', from) }
}

//autoread all
  if (global.autoread) { if (from)  { client.readMessages([msg.key]) }}

  //always online
  if (global.alwaysonline) { if (from) { client.sendPresenceUpdate('available', from) }}
                                                                    
  //=======================================================//
                         /* { plugins } */ 
    //=======================================================//
    
   for (let name in plugins) {
                let plugin = plugins[name]              
                if (plugin.order && plugin.order.includes(orderPlugins)) {
                    let turn = plugin.order instanceof Array
                        ? plugin.order.includes(orderPlugins)
                        : plugin.order instanceof String
                            ? plugin.order == orderPlugins
                            : false
                    if (!turn) continue
                    if (plugin.owner && !isOwner){ msg.reply(keywords[0]['message'][2])
                    continue 
                    }
                    if (plugin.group && !isGroup){ msg.reply(keywords[0]['message'][1])
                    continue
                    }
                    if (plugin.groupAdmins && !isGroupAdmins){ msg.reply(keywords[0]['message'][3])
                    continue
                    }
                    if (plugin.botGroupAdmins && !isBotGroupAdmins){ msg.reply(keywords[0]['message'][4])
                    continue
                    }
          await plugin.exec(msg, client, from, { q, args, order })
       }
   }         
   
const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: `${msg.sayingtime + msg.timoji}\n☏User: ${pushname}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}  
    //=======================================================//               
                                         /* { eval } */
    //=======================================================//
 


   
  /*
    //Dm and Groups Autoreply/Bot chat

   if (!isCmd && !isGroup){

   const botreply = await axios.get(`http://api.brainshop.ai/get?bid=166512&key=5nz1Ha6nS9Zx1MfT&uid=[uid]&msg=[msg]=[${budy}]`)

   txt = `${botreply.data.cnt}`
  msg.reply(txt)
  }      
    
   */

   //mode
  if (global.private) { if (from) {
if (!client.public) {
if (!msg.key.fromMe) return
}}}
 


//autoreact
  
  function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
const hsjdh = randomNomor(5)
  if (global.autoreact) { if (from) {
client.sendMessage(from, {react: {
           
            text: `${pickRandom(global.reactemoji)}`,
            key: msg.key,
         }})}}
  }
//AUTODOWNLOAD BY TOXIC-KRIZ 


                
if (global.autodlyt) { if (from) {
if (chatmessage.includes('https://youtu.be/')) {
client.sendMessage(from, { react: { text: "🎥" , key: msg.key }})

        let yts = require("yt-search");
            let search = await yts(chatmessage);
            let anu= search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return msg.reply(`_Video file too big!_`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
                
                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
 anu                })
                    .pipe(fs.createWriteStream(`./storage/${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`../storage/${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`../storage/${randomName}`),
                        
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `*_${titleYt}_*`                     
                    }
                 client.sendMessage(from,buttonMessage, { quoted: msg })
                 return fs.unlinkSync(`../storage/${randomName}`);
                } else {
                    msg.reply(`_ File size bigger than 100mb_`);
                }
                return fs.unlinkSync(`../storage/${randomName}`);      


        }}}

                  
     //=======================================================//
                                   /* { function pplong } */
     //=======================================================//
     
     const jimp_1 = require('jimp')
      async function generateProfilePicture(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

   //=======================================================//
                             /* { conlog cmd } */
   //=======================================================//
   
     if (isCmd && !isGroup) {
        console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'blue'), 'from', color(msg.pushName))
     }
     if (isCmd && isGroup) {
       console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'gray'), 'from', color(msg.pushName), 'in', color(client.groupName, 'violet'))
     }
 async function updateProfilePictureF(jid, imag, msg) {
  const { query } = client;
  const { img } = await generateProfilePicture(imag);
  await query({
    tag: "iq",
    attrs: {
      to: jid,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  });
}
  
   //=======================================================//
                         /* { cases } */   
   //=======================================================//
     function _0x37a1(){const _0x106839=['143LtHEdR','4118oVgyNX','8AMhdTL','\x20stars*_\x0a\x0a_*🍭\x20ꜰᴏʀᴋꜱ:*_\x20_*','387DACbjj','https://api.github.com/repos/A-S-W-I-N-S-P-A-R-K-Y/X-BOT-MD','20728ALFoRe','3930KDPRYY','529715bVSQwK','_*ʜᴇy\x20ʙʀᴏ\x20','github','3143oydNcF','get','repo','348785uTnwqy','script','2294470bsWosV','756456nRsTmD','forks_count','stargazers_count','198FVhDZl','*_\x0a\x0a_*⭐\x20ᴛᴏᴛᴀʟ\x20ꜱᴛᴀʀꜱ\x20:*_\x20_*','\x20forks*_\x0a\x0a\x20_*🌹\x20ʀᴇᴩᴏ\x20:*_\x20_*github.com/A-S-W-I-N-S-P-A-R-K-Y/X-BOT-MD*_'];_0x37a1=function(){return _0x106839;};return _0x37a1();}const _0x58cced=_0x2e2f;(function(_0x2e0752,_0x2a061b){const _0x4ef1e3=_0x2e2f,_0x1c6295=_0x2e0752();while(!![]){try{const _0x515869=-parseInt(_0x4ef1e3(0xae))/0x1+parseInt(_0x4ef1e3(0xb8))/0x2*(parseInt(_0x4ef1e3(0xb4))/0x3)+-parseInt(_0x4ef1e3(0xb9))/0x4*(-parseInt(_0x4ef1e3(0xbf))/0x5)+-parseInt(_0x4ef1e3(0xbe))/0x6*(parseInt(_0x4ef1e3(0xab))/0x7)+-parseInt(_0x4ef1e3(0xbd))/0x8*(parseInt(_0x4ef1e3(0xbb))/0x9)+-parseInt(_0x4ef1e3(0xb0))/0xa+-parseInt(_0x4ef1e3(0xb7))/0xb*(-parseInt(_0x4ef1e3(0xb1))/0xc);if(_0x515869===_0x2a061b)break;else _0x1c6295['push'](_0x1c6295['shift']());}catch(_0x382084){_0x1c6295['push'](_0x1c6295['shift']());}}}(_0x37a1,0x2ccee));function _0x2e2f(_0x42b00b,_0x43ae44){const _0x37a15b=_0x37a1();return _0x2e2f=function(_0x2e2fec,_0x3a35a5){_0x2e2fec=_0x2e2fec-0xa9;let _0x396eb3=_0x37a15b[_0x2e2fec];return _0x396eb3;},_0x2e2f(_0x42b00b,_0x43ae44);}switch(order){case prefix+[_0x58cced(0xad)]:case prefix+['git']:case prefix+[_0x58cced(0xaf)]:case prefix+['sc']:case prefix+[_0x58cced(0xaa)]:{let {data}=await axios[_0x58cced(0xac)](_0x58cced(0xbc)),cap=_0x58cced(0xa9)+pushname+_0x58cced(0xb5)+data[_0x58cced(0xb3)]+_0x58cced(0xba)+data[_0x58cced(0xb2)]+_0x58cced(0xb6);return await adreply(cap);}break;}                  
    switch(order){
     
     case prefix + ['alive'] :{
     adreply(config.ALIVE)
     }
     break
      case prefix + ['tr'] : case prefix + ['trt'] : case prefix + ['translate'] : {
if(!q && !msg.quoted) return await adreply(`*Please Give Me Text. Example: _${prefix}trt en Who are you_*`);
            const translatte = require("translatte");
            let lang = q ? q.split(" ")[0].toLowerCase() : 'en';
            if (!msg.quoted)  { text = q.replace( lang , "");  }
            else { text = citel.quoted.text; }
            var whole = await translatte(text, { from:"auto",  to: lang , });
            if ("text" in whole) { return await adreply(whole.text); }

        }
    

break;


       
      case prefix + ['reset'] : case prefix + ['revoke'] : {
if (!msg.isGroup) return adreply("_This cmd is only for groups_")
if (!isBotGroupAdmins) return adreply("_I Am Not Admin_")
if (!isGroupAdmins && !isOwner) return adreply("_You Are Not Admin Or Owner_")

client.groupRevokeInvite(from)
       }
break;
       
      case prefix + ['gpp'] : {
if (!msg.isGroup) return adreply("_This cmd is only for groups_")
if (!isBotGroupAdmins) return adreply("_I Am Not Admin_")
if (!isGroupAdmins && !isOwner) return adreply("_You are not admin or Owner_")

if (!quoted) return adreply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return adreply(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
if (/webp/.test(mime)) return adreply(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
let media = await client.downloadAndSaveMediaMessage(quoted)
await client.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
adreply("_*SUCCESSFULLY UPDATED GROUP PP*_")
}
break;

      case prefix + ['google'] : {
if (!q) return adreply(`Example : ${prefix + command} x-bot`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
adreply(teks)
})
      }
break
      case prefix + ['fancy'] : {
let { styletext } = require('../lib/fancy')
		if (!q) throw 'Enter Query text!'
                let anu = await styletext(q)
                let teks = `Style Text From ${q}\n\n`
                for (let i of anu) {
                    teks += `${i.name} : ${i.result}\n\n`
                }
                adreply(teks)
      }
break
      case prefix + ['img'] : {
  if (!teks) return adreply(`Example : ${prefix + command} x-bot`
)
        xeonezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${teks}`)

        n = xeonezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                client.sendMessage(from, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${teks}\n🔗 *Media Url* : ${images}`}, { quoted: msg })
      }
break
            case prefix + ['public'] : {
 if (!isOwner) return adreply('_*This Cmd Is Only For Owner*_')
                client.public = true               
                adreply('*Successful in Changing To Public Mode*')
            }
break
            case prefix + ['self'] : {
 if (!isOwner) return adreply('_*This Cmd Is Only For Owner*_')
                client.public = true               
                adreply('*Successful in Changing To Public Mode*')
        }
      case prefix + ['join'] : {
         if (!isOwner) throw adreply("_*This Cmd Is Only For Owner*_")
                if (!q) throw 'Enter Link Groups!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                adreply("_*Joined...!*_")
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => adreply(jsonformat(res))).catch((err) => adreply(jsonformat(err)))
      } 
break
      case prefix + ['>'] : {
       
if (!isOwner) return adreply("_*മൈരേ ഇത് ബോട്ട് ഉണ്ടാക്കിയവർക് ആണ് അല്ലാണ്ട് യൂസ് ആക്കുന്നുർക്ക് ഊമ്പാൻ ഉള്ളതല്ല*_")
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await adreply(evaled)
} catch (err) {
await adreply(String(err))
}
      }
        break
      case prefix + ['tag'] : {
         if (!isOwner) return adreply('_*This Cmd Is Only For Owner*_')
if (!teks) await adreply(`_Example : .tag hello_\n_Or_\n_Reply to a text .tag!_`)
if (!msg.isGroup) await adreply(`_This command is only for use in groups!_`)
if (!isGroupAdmins) await adreply(`_This command only can use group admins and bot owners!_`)
client.sendMessage(from, { text : teks, mentions: client.groupMembers.map(a => a.id)}, { quoted: msg })
    }
break
        case prefix + ['spotify'] : {
        const { spotifydl } = require('../lib/Spotify')
if (!q) return adreply("Please give me a valid link")
        const audioSpotify = await spotifydl(q.trim()).catch((err) => {
            return adreply(err.toString())
            console.error(err)
        })

        if (spotifydl.error) return adreply("Error Fetching: ${match.trim()}. Check if the url is valid and try again")
        adreply('Downloading has started please have some pesence')

        const caption = `🎧 *Title:* ${audioSpotify.data.name || ''}\n🎤 *Artists:* ${(
            audioSpotify.data.artists || []
        ).join(', ')}\n💽 *Album:* ${audioSpotify.data.album_name}\n📆 *Release Date:* ${
            audioSpotify.data.release_date || ''
        }`

        client.sendMessage(
            from,
            {
                image: audioSpotify.coverimage,
                caption: caption
            },
            {
                quoted: msg
            }
        )
        await client.sendMessage(
            from,
            {
                audio: audioSpotify.audio,
                mimetype: 'audio/mpeg',
                fileName: audioSpotify.data.name + '.mp3'
            },
            {
                quoted: msg
            }
        )
    
      }
break;
      case prefix + ['leave'] : case prefix + ['left'] : {
           if (!isOwner) throw adreply("_*This Cmd Is Only For Owner*_")
                await client.groupLeave(from).then((res) => adreply(jsonformat(res))).catch((err) => adreply(jsonformat(err)))
      }
        break
case prefix + ['tobc']: {

let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: global.thumb, surface: 200, message: global.ownername, orderTitle: global.botname, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                if (!isOwner) adreply("*_This Cmd Is Only For My Owner*_")
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) adreply("*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}")
                let anu = await store.chats.all().map(v => v.id)
let duration = [19998000]
let waveform =  [0,99,0,99,0,99]
                
                adreply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
                for (let i of anu) {
                    await sleep(1500)
                    
                    const thumb = global.thumb
                    let logo = await getBuffer(thumb)
                    let media = await client.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    
                        
    
               if (/audio/.test(mime)) {
                    client.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg', ptt:true, waveform, duration,
contextInfo: { externalAdReply: {

title: global.botname,

sourceUrl: global.url,

mediaUrl: global.url,

mediaType: 1,

showAdAttribution: true,

renderLargerThumbnail: true,

thumbnailUrl: global.thumb }}});
                    } else {
                    adreply(`*Send reply Audio You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                adreply(` *Send Broadcast To* ${anu.length} *Chats*`)

}
            break
        case prefix + ['story'] : case prefix + ['igstory'] :
  if (!q)return adreply(`*_Need instagram post url!_*`)
 adreply(`_*Downloading instagram stories from ${q}*_`)
var ig = await fetch(`https://xzn.wtf/api/igdl?url=https://instagram.com/stories/${q}&apikey=toxickichu`);
var igdl = await ig.json();
for (var i = 0; i < igdl.media.length; i++) {
var type = igdl.media[i].includes('.jpg') ? 'image' : 'video'
client.sendMessage(from, {[type]:{ url:igdl.media[i]}}, {quoted: msg })
}
break
      
        
case prefix + ['url'] : {
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require("../lib/uploader")

let media = await client.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
msg.reply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await TelegraPh(media)
msg.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
      case prefix + ['tts'] :{
        const googleTTS = require("google-tts-api");
if (!q) return msg.reply('Where is the text?')
            let texttts = q
            const kriz = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return client.sendMessage(from, {
                audio: {
                    url: kriz,
                },
                mimetype: 'audio/mp4',
                ptt: false,
                fileName: `${global.botname}.mp3`,
            }, {
                quoted: msg,
            })
      }
break

      case prefix + ['mp4'] : {
    if (!quoted) throw 'Reply animated sticker'
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                adreply("_*Please   Wait...*_")
		let { webp2mp4File } = require('../lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: msg })
                await fs.unlinkSync(media)
      }
break
case prefix + ['menu']:  case prefix + ['m'] : case prefix + ['help'] : {
async function loading () {
var kriz = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"~_*© X-BOT-MD*_~\n_*LOADING COMPLETED*_..."
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < kriz.length; i++) {
/*await delay(10)*/
await client.sendMessage(from, {text: kriz[i], edit: key });
}
}
  
  var myid = client.user.id.split(":")[0]
const spark = sparky[Math.floor(Math.random()*sparky.length)];
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
    }   
   const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')

  let kunna = `╭──〘 *_${botname}_* 〙─┈
│
│ _*User*_ : _*${pushname}*_
│ _*Owner*_ : _*${ownername}*_
│ _*Time*_  : _*${xtime}*_
│ _*Date*_  : _*${xdate}*_
│ _*Version*_ : _*${VERSION}*_
│
└─────────────────┈${readMore}



╭──〘 *_Owner_* 〙─┈
│${spark} ${prefix} _*Setpp*_
│${spark} ${prefix} _*Public*_
│${spark} ${prefix} _*Private*_
│${spark} ${prefix} _*fullpp*_
│${spark} ${prefix} _*tobc*_
│${spark} ${prefix} _*bc*_
│${spark} ${prefix} _*Join*_
│${spark} ${prefix} _*Left*_
│${spark} ${prefix} _*wave*_
│${spark} ${prefix} _*Fs*_
│${spark} ${prefix} _*Fi*_
│${spark} ${prefix} _*>*_
└───────────────────┈


╭──〘 *_Group_* 〙─┈
│${spark} ${prefix} _*Add*_
│${spark} ${prefix} _*Kick*_
│${spark} ${prefix} _*Promote*_
│${spark} ${prefix} _*Demote*_
│${spark} ${prefix} _*Invite*_
│${spark} ${prefix} _*Group*_
│${spark} ${prefix} _*Tag*_
│${spark} ${prefix} _*Gpp*_
└───────────────────┈


╭──〘 *_Misc_* 〙─┈
│${spark} ${prefix} _*Ping*_
│${spark} ${prefix} _*Remini*_
│${spark} ${prefix} _*qr*_
│${spark} ${prefix} _*Jid*_
│${spark} ${prefix} _*Url*_
│${spark} ${prefix} _*Fancy*_
└───────────────────┈


╭──〘 *_Download_* 〙─┈
│${spark} ${prefix} _*Insta*_
│${spark} ${prefix} _*Story*_
│${spark} ${prefix} _*Song*_
│${spark} ${prefix} _*Video*_
│${spark} ${prefix} _*Mediafire*_
└───────────────────┈


╭──〘 *_Converter_* 〙─┈
│${spark} ${prefix} _*Mp3*_
│${spark} ${prefix} _*Sticker*_
│${spark} ${prefix} _*Photo*_
│${spark} ${prefix} _*tts*_
│${spark} ${prefix} _*Mp4*_
└───────────────────┈


╭──〘 *_Search_* 〙─┈
│${spark} ${prefix} _*Yts*_
│${spark} ${prefix} _*Google*_
│${spark} ${prefix} _*Find*_
│${spark} ${prefix} _*Happymod*_
│${spark} ${prefix} _*Img*_
└───────────────────┈`
await loading()
  client.sendMessage(from, { text : randomFancy(kunna),
contextInfo: { externalAdReply: {
title:global.botname,
sourceUrl:global.url,
mediaUrl: global.url,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: global.thumb }}}, {quoted: msg})
}
break
      case prefix + ['yts'] : {

if (!q) return replygcxeon(`Example : ${prefix + command} king of kotha`)
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = 'YouTube Search\n\n Result From '+q+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `𒈒 No : ${no++}\n𒈒 Type : ${i.type}\n𒈒 Video ID : ${i.videoId}\n𒈒 Title : ${i.title}\n𒈒 Views : ${i.views}\n𒈒 Duration : ${i.timestamp}\n𒈒 Uploaded : ${i.ago}\n𒈒 Url : ${i.url} \n\n─────────────────\n\n`
                }
                client.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: msg })
      }
break
     /* case prefix + ['ai'] : {
if (args.length == 0) return msg.reply("_*Ai X Bot*_")

let res = await fetch(`https://xzn.wtf/api/openai?text=${args[0]}&apikey=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`)
let dimss = await res.json()
msg.reply(dimss.result)
} 
break
*/
        //invite
      case prefix + ['invite'] : {
if (!isGroup) return msg.reply("_*ᴛʜᴇ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ɢʀᴏᴩꜱ*_")
if (!isBotGroupAdmins) return msg.reply("_*ɪ ᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ*_")
client.sendMessage(from, { react: { text: "🪄" , key: msg.key }})
let response = await client.groupInviteCode(from)
client.sendMessage(from, {text:`*Group Name:* *${groupMetdata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`

}, { quoted: msg, detectLink: true })
}
break;
       
      case prefix + ['mediafire'] : {

if (args.length == 0) return adreply(`Where is the link ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return adreply(`The link you provided is invalid`)
	const  { mediafireDl } = require("../lib/mediafire")
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return adreply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
adreply(`${result4}`)
client.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : msg })
}
break

        //add
      case prefix + ['add'] : {
if (!isGroup) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ᴍᴀᴅᴇ ꜰᴏʀ ɢʀᴏᴜᴩꜱ*_")
if (!isBotGroupAdmins) return msg.reply("_*ɪᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ*_")
if (!isOwner) return msg.reply("_*ᴛʜᴇ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ᴍy ᴏᴡɴᴇʀ*_")
client.sendMessage(from, { react: { text: "🫡" , key: msg.key }})


let users = msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users.length == 0) return msg.reply(`_*Please write the number of the person you want to add to thhis group*_`)
await client.groupParticipantsUpdate(from, [users], 'add').then((res) => msg.reply(`_*User Added Successfully!*_`)).catch((err) => msg.reply(`_*Cannot add that user to this group!*_`))
}
break;

        //kick
      case prefix + ['kick'] : {
if (!isGroup) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ɢʀᴏᴜᴩꜱ*_")
if (!isBotGroupAdmins) return msg.reply("_*ɪ ᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ*_")
if (!isGroupAdmins && !isOwner) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ᴀᴅᴍɪɴ & ᴏᴡɴᴇʀ*_")
client.sendMessage(from, { react: { text: "🫡" , key: msg.key }})
let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(from, [users], 'remove')
}
break;

        //promote
      case prefix + ['promote'] : {
if (!isGroup) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ɢʀᴏᴜᴩꜱ*_")
if (!isBotGroupAdmins) return msg.reply("_*ɪᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ*_")
if (!isGroupAdmins && !isOwner) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ᴀᴅᴍɪɴ & ᴏᴡɴᴇʀ*_")
client.sendMessage(from, { react: { text: "🫡" , key: msg.key }})
let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(from, [users], 'promote').then((res) => msg.reply(jsonformat(res))).catch((err) =>msg.reply(jsonformat(err)))
msg.reply("_*ᴜꜱᴇʀ ᴩʀᴏᴍᴏᴛᴇᴅ*_")
}
break;

        //demote
      case prefix + ['demote'] : {
if (!isGroup) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ɢʀᴏᴜᴩꜱ*_")
if (!isBotGroupAdmins) return msg.reply("_*ɪ ᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ*_")
if (!isGroupAdmins && !isOwner) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ᴀᴅᴍɪɴ & ᴏᴡɴᴇʀ*_")
client.sendMessage(from, { react: { text: "🫡" , key: msg.key }})
let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(from, [users], 'demote').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
msg.reply("_*ᴜꜱᴇʀ ᴅᴇᴍᴏᴛᴇᴅ*_")
}
break;

//broadcast

      case prefix + ['bc'] : {
if(!isOwner) await msg.reply('you are not my owner')
        if (!q) return msg.reply(`Enter text`)
        let getGroups = await client.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        msg.reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await client.sendMessage(i, { image:media,  caption: txt,mentions:client.groupMembers.map(a => a.id) })
}
          
if(/video/.test(mime)){
let media = await quoted.download()
await client.sendMessage(i, { video:media,  caption: txt, mentions:client.groupMembers.map(a => a.id) })
}
            }
        msg.reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`) 
        }    
        break

     //fd
      case prefix + ['wave'] : {
      let media = await msg.quoted.download()
      let buffer = media
      if (!q) await msg.reply(`_Example : fd jid note:only one jid can use!_`)
      client.sendMessage(q, { audio: buffer,
			waveform: Array.from({length: 30}, () => Math.floor(Math.random() * 100)),ptt:true,mimetype:"audio/mpeg"
    });
      }
break
              case prefix + ['fs'] : {
          if (!isOwner) await adreply(`_This command only owner can use!._`)
      let media = await msg.quoted.download()
      let buffer = media
      if (!q) await adreply(`_Example : fd jid note:only one jid can use!_`)
      client.sendMessage(q, { sticker: buffer,
			
			contextInfo: { externalAdReply: {

title: global.botname,

sourceUrl: global.url,

mediaUrl: global.url,

mediaType: 1,

showAdAttribution: true,

renderLargerThumbnail: true,

thumbnailUrl: global.thumb }}});
    }
break

                      case prefix + ['fi'] : {
          if (!isOwner) await adreply(`_This command only owner can use!._`)
      let media = await msg.quoted.download()
      let buffer = media
      if (!q) await adreply(`_Example : fd jid note:only one jid can use!_`)
      client.sendMessage(q, { image: buffer,
			
			contextInfo: { externalAdReply: {

title: global.botname,

sourceUrl: global.url,

mediaUrl: global.url,

mediaType: 1,

showAdAttribution: true,

renderLargerThumbnail: true,

thumbnailUrl: global.thumb }}});
    }
break
       
      case prefix + ['find'] : {
        const FileSize = (number) => {
    var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
if (isQuotedAudio) {
msg.reply("_*Please Wait*_")
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return msg.reply('*Reply to an audio or video')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return msg.reply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return msg.reply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)

let teks = `╭═══〘_*RESULT FOUND*_〙═══X 
┃_*𒈒Title: ${res.title}*_
┃_*𒈒Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}*_
┃_*𒈒Album: ${res.album.name || ''}*_
┃_*𒈒Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') :
''}*_
┃_*𒈒Release Date: ${res.release_date}*_
┃_*𒈒Durasi : ${ras[0].timestamp}*_
┃_*𒈒Audio : ┃${FileSize(audio[0].contentLength)}*_
┃_*𒈒Video : ┃${FileSize(format.contentLength)}*_
┃     
┃  © _*${global.botname}*_
╰═════════════════X`
client.sendMessage(from, { image : yamyam, caption: randomFancy(teks) }, { quoted: msg})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
msg.reply("_*Please Wait*_")
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return msg.reply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return msg.reply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return msg.reply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)

let teks = `╭═══〘_*RESULT FOUND*_〙═══X 
┃_*𒈒Title: ${res.title}*_
┃_*𒈒Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}*_
┃_*𒈒Album: ${res.album.name || ''}*_
┃_*𒈒Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}*_
┃_*𒈒Release Date: ${res.release_date}*_
┃_*𒈒Durasi : ${ras[0].timestamp}*_
┃_*𒈒Audio : ┃${FileSize(audio[0].contentLength)}*_
┃_*𒈒Video : ┃${FileSize(format.contentLength)}*_
┃     
┃  © _*${global.botname}*_
╰═════════════════X`
client.sendMessage(from, { image : yamyam, caption: randomFancy(teks) }, { quoted: msg})
});
fs.unlinkSync(ran)
})
} else {
msg.reply("Reply audio atau video")
}
      }
break
      case prefix + ['xtext'] : {
if (!isOwner) return adreply("_*This Cmd Is Only For Owner*_")
if (!q) throw `Where text?\nExample : ${prefix + command} x bot`
let anu = await store.chats.all().map(v => v.id)

let logo = await getBuffer(thumb)
adreply(`Send Broadcast To ${anu.length} Chat\Time's up ${anu.length * 1.5} seconds`)
		for (let yoi of anu) {
		await sleep(1500)
		let txt = `${q}`
		
            await client.sendMessage(yoi, txt, global.botname, msg, {quoted: msg})
		}
		adreply('_Broadcast Success!_')
      }
                            
                            break

//qr genarator
      case prefix + ['qr'] : {
if (!isGroup) return msg.reply("_*ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ɪꜱ ᴏɴʟy ᴡᴏʀᴋ ɪɴ ɢʀᴏᴜᴩꜱ*_")
client.sendMessage(from, { react: { text: "✅️" , key: msg.key }})
  
  msg.reply(`_*Running Qr Please Wait ...*_`)						
  var replqr =  await getBuffer(`https://x-md-qr-elctro-wizard.koyeb.app/session`)
                     /*        var qrbutton = [
          {buttonId: `${prefix}qr`, buttonText: {displayText: `Tap to Re-run Repl`}, type: 1}
          ] */
        let bmffg = {
         image: replqr,
         caption:  `_*Scan the qr within 10-15 seconds...*_`,
    /*    footer: `${global.BotName}`,
        buttons: qrbutton,
        headerType: 4 */
        }     
              await client.sendMessage(from, bmffg,{ quoted:msg }).catch(err => {
                      return('Error!')
                  })
      }
  break;


case prefix + ['group'] : { 
     	if (!isGroup) return msg.reply('Special ⁉️')
     	if (!isBotGroupAdmins) return msg.reply('_*Bot Must Be Admin*_')
     	if (!isGroupAdmins) return msg.reply('*_Make Me Admin_*')
     	if (q.toLowerCase() === "close") {
     		await client.groupSettingUpdate(from, 'announcement').then((res) => msg.reply(`*Successfully Closing The Group*`)).catch((err) => msg.reply(jsonformat(err)))
         } else if (q.toLowerCase() === "open") {
         	await  client.groupSettingUpdate(from, 'not_announcement').then((res) => msg.reply(`*Successfully Opening The Group*`)).catch((err) => msg.reply(jsonformat(err)))
          } else {	
          	 client.sendPoll(from, "Please Select , I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} open`,`${command.charAt(0).toUpperCase()+command.slice(1)} close`])
          }   
      }      
      break

        //remini
        case prefix + ['remini'] : {
			if (!quoted) return adreply(`Where is the picture?`)
			if (!/image/.test(mime)) return adreply(`Send/Reply Photos With Captions ${prefix + command}`)
			msg.reply('*_Enhancing......_*')
			const { remini } = require('../lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			client.sendMessage(from, { image: proses, caption: global.caption}, { quoted: msg})
    }
        break

        //fullpp
      case prefix + ['fullpp'] : {
        if (!isOwner) throw adreply("_*This Cmd Is Only For Owner*_")
    if (!quoted) return `*Send/Reply Image With Caption* ${prefix + command}`
              if (!/image/.test(mime)) return `*Send/Reply Image With Caption* ${prefix + command}`
              if (/webp/.test(mime)) return `*Send/Reply Image With*`
    let media  = await client.downloadAndSaveMediaMessage(quoted)
    await updateProfilePictureF(botNumber, media, msg);
    return await adreply("_Profile Picture Updated_");
  }
    

break

        //ping
      case prefix + ['ping']: case prefix + ['p'] : {
            const start = new Date().getTime();
    const pari = await randomFancy("_*Checking Speed*_")
    await msg.reply(pari);
    const end = new Date().getTime();
    
      const kriz = await randomFancy( (end - start) + " *ms︎*")
    return await msg.reply(kriz);
      }
      
        break
      case prefix + ['runtime'] : {
const { runtime } = require('../lib/function')
const myr = randomFancy(`_*Runtime : 52 Days, ${runtime(process.uptime())}*_`)
adreply(myr)
      }
break


        //happy mod
      case prefix + ['happymod'] : {

const modapk = require("tod-api")
const Thumb = "https://i.imgur.com/tayp3Uf.jpg"
  client.sendMessage(from, { react: { text: "🔍" , key: msg.key }});
  
  if (!args.join(" ")) return msg.reply(`Example: ${prefix + command} Kinemaster`);
  
  const searchTerm = args.join(" ");
 modapk.happymod(searchTerm).then(async (res) => {
    let teks = '```「 HappyMod Search Engine 」```';
    for (let i of res) {
      teks += `\n\n${i.name}\n`;
      teks += `${i.link}`;
    }
  
    let messageToSend = teks;
    if (res[0].icon) {
      messageToSend = {
        text: teks,
        image: { url: res[0].icon },
        jpegThumbnail: Thumb,
      };
    }
  
    client.sendMessage(from, messageToSend, { quoted: msg });
  });
      }
break
        // photo converter 
      case prefix + ['photo'] : {
client.sendMessage(from, { react: { text: "🪄" , key: msg.key }})
if (!quoted) return msg.reply('Reply Image')
if (!/webp/.test(mime)) return msg.reply(`Reply sticker with caption *${prefix + command}*`)
msg.reply("_*ᴄᴏɴᴠᴇʀᴛɪɴɢ ꜱᴛɪᴄᴋᴇʀ ᴛᴏ ᴩʜᴏᴛᴏ*_")
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
client.sendMessage(from, { image: buffer }, { quoted: msg})
fs.unlinkSync(ran)
})
      }
break
        async function webpUpload(file){
    return new Promise(async (resolve)=>{
    const webpupload = require("imgbb-uploader");
    for (let key of global.IMGBB_KEY){
    const options = {apiKey: key,imagePath: file};
    var res = await webpupload(options)
    if (res.url) return resolve(res.url);
    }
});
}


     
case prefix + ['setpp'] : {
if (!isOwner) return msg.reply("_*ᴛʜɪꜱ ᴄᴍᴅ ɪꜱ ᴏɴʟy ꜰᴏʀ ʙᴏᴛ ᴏᴡɴᴇʀ*_")
        
        
        client.sendMessage(from, { react: { text: "🫡" , key: msg.key }})

              if (!quoted) return `*Send/Reply Image With Caption* ${prefix + command}`
              if (!/image/.test(mime)) return `*Send/Reply Image With Caption* ${prefix + command}`
              if (/webp/.test(mime)) return `*Send/Reply Image With Caption* ${prefix + command}`
              let media = await client.downloadAndSaveMediaMessage(quoted)
              await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
              msg.reply("_*ᴩʀᴏꜰɪʟᴇ ᴜᴩᴅᴀᴛᴇᴅ*_")
              }
              break;


// instagram download 
/*case prefix + ['insta'] : case prefix + ['instagram'] :
 if (args.length == 0)return msg.reply(`*_Need instagram post url!_*`)
 msg.reply('_*Downloading...*_');
var ig = await fetch(`https://xzn.wtf/api/igdl?url=${args[0]}&apikey=toxickichu`);
var igdl = await ig.json();
for (var i = 0; i < igdl.media[i].length; i++) {
var type = igdl.media[i].includes('.jpg') ? 'image' : 'video'
client.sendMessage(from, {[type]:{ url:igdl.media[i]}, caption: `*${igdl.caption}*`}, {quoted: msg })
    }
			break
//ig story
case prefix + ['story'] : case prefix + ['igstory'] :
  if (!q)return msg.reply(`*_Need instagram post url!_*`)
 msg.reply(`_*Downloading instagram stories from ${q}*_`)
var ig = await fetch(`https://xzn.wtf/api/igdl?url=https://instagram.com/stories/${q}&apikey=toxickichu`);
var igdl = await ig.json();
for (var i = 0; i < igdl.media.length; i++) {
var type = igdl.media[i].includes('.jpg') ? 'image' : 'video'
client.sendMessage(from, {[type]:{ url:igdl.media[i]}}, {quoted: msg })
}
break*/
case prefix + ['insta'] : case prefix + ['instagram'] :
if (!teks)return adreply(`*_Need instagram post url!_*`)
 adreply('_*Downloading...*_');
var ig = await fetch(`https://xzn.wtf/api/igdl?url=${q}&apikey=toxickichu`);
var igdl = await ig.json();
for (var i = 0; i < igdl.media[i].length; i++) {
var type = igdl.media[i].includes('.jpg') ? 'image' : 'video'
client.sendMessage(from, {[type]:{ url:igdl.media[i]}, caption: `*${igdl.caption}*`}, {quoted: msg })
     }
			break
  
      // yt song download 
        case prefix + ['song'] : case prefix + ['yta'] :  case prefix + ['play'] : {
        client.sendMessage(from, { react: { text: "🎧" , key: msg.key }}) 
if (!teks) return await adreply(`*_Provide a song name/link!_*`)
            let yts = require("yt-search");
            let search = await yts(q);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return msg.reply(`_ Video file too big!_`);
            let titleYt = infoYt.videoDetails.title;
          let randomName = getRandom(".mp3");
let img = await getBuffer(anu.thumbnail);
            await client.sendMessage(from,{ text : `*_ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ  ${titleYt}_*`, contextInfo: { externalAdReply: {
title: `${pushname}`,
sourceUrl: anu.url,
mediaUrl: anu.url,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: anu.thumbnail }}}, {quoted: msg});
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./storage/${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./storage/${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let buttonMessage = {
                    audio: fs.readFileSync(`./storage/${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    
                }
                await client.sendMessage(from, buttonMessage,{ quoted: msg })
                return fs.unlinkSync(`./storage/${randomName}`);
            } else {
                msg.reply(`_ File size bigger than 100mb_`);
            }
            fs.unlinkSync(`./storage/${randomName}`);
        }   
      
break
        case prefix + ['video'] : case prefix + ['ytv']  : {
client.sendMessage(from, { react: { text: "🎥" , key: msg.key }}) 
if (!q) return await msg.reply(`*_Provide a video name/link!_*`);
            let search = await yts(q);
            let anu = search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return msg.reply(`_Video file too big!_`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
                await client.sendMessage(from,{text:`*_Downloading : ${titleYt}_*`, contextInfo: { externalAdReply: {
title: `${pushname}`,
sourceUrl: anu.url,
mediaUrl: anu.url,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: anu.thumbnail }}}, {quoted: msg});
                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./storage/${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./storage/${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./storage/${randomName}`),
                        
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `*_${titleYt}_*`                     
                    }
                 client.sendMessage(from, buttonMessage, { quoted: msg })
                 return fs.unlinkSync(`./storage/${randomName}`);
                } else {
                    msg.reply(`_ File size bigger than 100mb_`);
                }
                return fs.unlinkSync(`./storage/${randomName}`);      


        }
    break


        // fb download 
case prefix + ['fb'] :     {	    


const bocil = require('@bochilteam/scraper');


            if (!teks) {
                
                return msg.reply(`*Please Provide a Valid Facebook Video Link*`);
       
                bocil.facebookdlv2(`${teks}`).then(async (data) => {

                    let kriz = `*╭────❰* *F A C B K - D W N  L D*\n  
*❒* *TITLE*: *FACBOOK*\n
*❒* *HD QUALTY*: *720p*\n
*╰─────────────⭓*`;
                    client.sendMessage(from, {
                        video: {
                            url: data.result[0].url
                        }, caption: kriz
                    }, {
                        quoted: msg
                    })
                
        
                })}}

         
       break
  
        // music finder Find


        // Sticker
      case prefix + ['take']:  case prefix + ['s']:  case prefix + ['sticker']: {
   if (!quoted) throw `*Reply Video/Image With caption* ${prefix + command}`
            adreply("_*Converting To Sticker*_")
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(from, media, msg, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return adreply('_Maximum 10 seconds!_')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(from, media, msg, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `_Reply to photo or video!_`
                }
          }
     break

   // mp3
case prefix + ['mp3'] :   {
if (/document/.test(mime)) return adreply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return adreply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!msg.quoted) return adreply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
adreply("_*Converting To  Audio*_")
let media = await quoted.download()
let { toAudio } = require('../lib/converter')
let audio = await toAudio(media, 'mp4')
client.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.botname} (${msg.id}).mp3`}, { quoted : msg })
}
            break
             
// tiktok download     
case prefix + ['tiktok'] :  {
if(!q) return await msg.reply(`*Uhh Please, Provide me tiktok Video Url*\n*_Ex .tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`);
 let txt = q ? q.split(" ")[0]:'';
 if (!/tiktok/.test(txt)) return await msg.reply(`*Uhh Please, Give me Valid Tiktok Video Url!*`);
 const { status ,thumbnail, video, audio } = await tiktokdl(txt)
 //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
 if (status) return await client.sendMessage(from, {video : {url : video } , caption : "_*ꜱᴜᴄᴄᴇꜱꜱ*_" } , {quoted : msg });
 else return await msg.reply("Error While Downloading Your Video") 
}
    
 break		 

                // status sender if asks
        
case prefix + ['snt'] : case prefix + ['snd'] : case prefix + ['giv'] : case prefix + ['gs'] : case prefix + ['snt'] : case prefix + ['ayak'] : case prefix + ['thada'] : case prefix + ['tha'] : case prefix + ['sd'] :  case prefix + ['st'] : case prefix + ['ayak myre'] : case prefix + ['znt'] : case prefix + ['save'] :case prefix + ['send'] : {
let a= await msg.quoted.download()
let mm = await require('file-type').fromBuffer(a)
return await client.sendMessage(from, {[mm.mime.split('/')[0]]:a});
     }
        
break
		    

      case prefix + ['ss'] : {
if (!q) return adreply("```Uhh Please, Give me Url!```");
    var url = text;
    let urll = `https://s.vercel.app/api?url=${url.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
    let media  = await getBuffer(urll)
    return await client.sendMessage(from ,{image : media } , {quoted:msg} )
 }

break


    //=============================0==========================// 
                                           /* { akhir case } */
               if (msg.text.includes('https://www.instagram.com'))
   client.sendMessage(from, { react: { text: "✅️" , key: msg.key }}) 
 if (!isUrl(chatmessage)) return msg.reply(`*_Invalid Link_*`)
  return msg.reply(`_*Wait Aaak Myra*_`)
 msg.reply('_*Downloading...*_')
 instagram(chatmessage).then( data => {
 for ( let i of data ) {
 if (i.type === "video") {
 client.sendMessage(from, {video: {url: i.url}}, {quoted: msg })
 } else if (i.type === "image") {
 client.sendMessage(from, { caption: "_*success*_", image: { url: i.url }}, {quoted: msg })
            }
     }
 }).catch(() => msg.reply(`*Aah Oombie 🤣🖐🏻*`))     
}

    //=======================================================//
  
  
  
   //=======================================================//
                      /* { includes } */   
   //=======================================================//


 }

//end module exports
let file = require.resolve(__filename)
 fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.red(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})

//
