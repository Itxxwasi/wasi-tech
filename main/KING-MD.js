require('../config')
const config = require ('../config')
const SETTING = require('../lib/validator/config')
const keywords = require('../lib/validator/allKeywords')
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
//chudo
const _0x256d5a=_0x37fe;function _0x5d90(){const _0x2b569d=['919961857267','864054kwKGFh','1412ABPfhN','3055wsixjc','917594898804','9MxaGwW','917012984396','1085698vWmtlD','13009088zXZsQQ','51479530QHNFpZ','77DpBLBw','1978806IeiWOR','695935tQokta'];_0x5d90=function(){return _0x2b569d;};return _0x5d90();}(function(_0x249923,_0xad67c9){const _0x42e608=_0x37fe,_0x217083=_0x249923();while(!![]){try{const _0x44e827=-parseInt(_0x42e608(0xbf))/0x1+parseInt(_0x42e608(0xba))/0x2+-parseInt(_0x42e608(0xbe))/0x3+parseInt(_0x42e608(0xc2))/0x4*(-parseInt(_0x42e608(0xc3))/0x5)+parseInt(_0x42e608(0xc1))/0x6*(-parseInt(_0x42e608(0xbd))/0x7)+-parseInt(_0x42e608(0xbb))/0x8+-parseInt(_0x42e608(0xb8))/0x9*(-parseInt(_0x42e608(0xbc))/0xa);if(_0x44e827===_0xad67c9)break;else _0x217083['push'](_0x217083['shift']());}catch(_0x49b5d2){_0x217083['push'](_0x217083['shift']());}}}(_0x5d90,0xde023));function _0x37fe(_0x5d810e,_0x33a774){const _0x5d909c=_0x5d90();return _0x37fe=function(_0x37fe89,_0x528751){_0x37fe89=_0x37fe89-0xb7;let _0x165d54=_0x5d909c[_0x37fe89];return _0x165d54;},_0x37fe(_0x5d810e,_0x33a774);}const chudo=[_0x256d5a(0xb7),_0x256d5a(0xb9),_0x256d5a(0xc0)];
   
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
  const _0x3844fc=_0x36ff;(function(_0x14cdf,_0x370fc3){const _0x2d9c4f=_0x36ff,_0x5a4440=_0x14cdf();while(!![]){try{const _0x1b4b3d=-parseInt(_0x2d9c4f(0x151))/0x1+parseInt(_0x2d9c4f(0x14f))/0x2*(-parseInt(_0x2d9c4f(0x14a))/0x3)+-parseInt(_0x2d9c4f(0x14c))/0x4+parseInt(_0x2d9c4f(0x14e))/0x5+parseInt(_0x2d9c4f(0x14d))/0x6+-parseInt(_0x2d9c4f(0x152))/0x7+parseInt(_0x2d9c4f(0x153))/0x8;if(_0x1b4b3d===_0x370fc3)break;else _0x5a4440['push'](_0x5a4440['shift']());}catch(_0x225e9d){_0x5a4440['push'](_0x5a4440['shift']());}}}(_0x5da2,0x38d5d));const sleep=async _0x3b9ec1=>{return new Promise(_0x58727c=>setTimeout(_0x58727c,_0x3b9ec1));},formatSize=sizeFormatter({'std':_0x3844fc(0x150),'decimalPlaces':'2','keepTrailingZeroes':![],'render':(_0x43c3cf,_0x268831)=>_0x43c3cf+'\x20'+_0x268831+'B'});function _0x5da2(){const _0x17d6c8=['JEDEC','63601IjSVnn','2488738PqVQDJ','5435208baXPDM','url','sendMessage','botname','audio/mpeg','97299SEEDgy','thumb','342376VXdtKp','889122bliuoZ','1495670dUEqCA','24enIdLo'];_0x5da2=function(){return _0x17d6c8;};return _0x5da2();}adreply=async _0x23bad2=>{const _0x1ab458=_0x3844fc;client['sendMessage'](from,{'text':_0x23bad2,'contextInfo':{'externalAdReply':{'title':global[_0x1ab458(0x156)],'sourceUrl':global[_0x1ab458(0x154)],'mediaUrl':global['url'],'mediaType':0x1,'showAdAttribution':!![],'renderLargerThumbnail':![],'thumbnailUrl':global[_0x1ab458(0x14b)]}}},{'quoted':msg});};function _0x36ff(_0x2b30e0,_0x20e5fa){const _0x5da242=_0x5da2();return _0x36ff=function(_0x36ff49,_0x2e9ec8){_0x36ff49=_0x36ff49-0x149;let _0x3b5404=_0x5da242[_0x36ff49];return _0x3b5404;},_0x36ff(_0x2b30e0,_0x20e5fa);}const sendvn=async _0xfdacc9=>{const _0x40b846=_0x3844fc;client[_0x40b846(0x155)](from,{'audio':{'url':_0xfdacc9},'ptt':!![],'waveform':[0x0,0x0,0x32,0x0,0x0,0x0,0xa,0x50,0xa,0x3c,0xa,0x63,0x3c,0x1e,0xa,0x0,0x0,0x0],'mimetype':_0x40b846(0x149)},{'quoted':msg});};
   //functions
 
function _0x4925(){const _0x51aaae=['load','https://tikdown.org/id','137MichqK','div.download-links\x20>\x20div:nth-child(2)\x20>\x20a','img','19490PyUJrM','529708WefHuX','2813055mKEuCK','get','856JPHpAP','#download-form\x20>\x20input[type=hidden]:nth-child(2)','15KhnGUQ','div.download-links\x20>\x20div:nth-child(1)\x20>\x20a','3004044nToKTv','post','data','143VOtxay','49580sGgTtE','html','attr','href','Mozilla/5.0\x20(Windows\x20NT\x206.3;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/100.0.4896.88\x20Safari/537.36','status','src','value','2802604zWousF','30924CXzLBD'];_0x4925=function(){return _0x51aaae;};return _0x4925();}(function(_0x137afc,_0xf8367){const _0x17c669=_0xf219,_0x38e3ec=_0x137afc();while(!![]){try{const _0x486624=-parseInt(_0x17c669(0x181))/0x1*(-parseInt(_0x17c669(0x184))/0x2)+-parseInt(_0x17c669(0x16f))/0x3*(-parseInt(_0x17c669(0x16a))/0x4)+-parseInt(_0x17c669(0x16b))/0x5+-parseInt(_0x17c669(0x171))/0x6+parseInt(_0x17c669(0x17d))/0x7+parseInt(_0x17c669(0x16d))/0x8*(-parseInt(_0x17c669(0x17e))/0x9)+parseInt(_0x17c669(0x175))/0xa*(-parseInt(_0x17c669(0x174))/0xb);if(_0x486624===_0xf8367)break;else _0x38e3ec['push'](_0x38e3ec['shift']());}catch(_0x158cc4){_0x38e3ec['push'](_0x38e3ec['shift']());}}}(_0x4925,0xdc425));async function tiktokdl(_0x174048){const _0xe3f0b3=_0xf219,_0x14415b=await axios[_0xe3f0b3(0x16c)](_0xe3f0b3(0x180)),_0x422617=cheerio[_0xe3f0b3(0x17f)](_0x14415b[_0xe3f0b3(0x173)]),_0x3ea227=_0x422617(_0xe3f0b3(0x16e))[_0xe3f0b3(0x177)](_0xe3f0b3(0x17c)),_0x1ef37b={'url':_0x174048,'_token':_0x3ea227},{data:_0x3b9819}=await axios['request']('https://tikdown.org/getAjax?',{'method':_0xe3f0b3(0x172),'data':new URLSearchParams(Object['entries'](_0x1ef37b)),'headers':{'content-type':'application/x-www-form-urlencoded;\x20charset=UTF-8','user-agent':_0xe3f0b3(0x179)}});var _0x25e4d7=cheerio[_0xe3f0b3(0x17f)](_0x3b9819[_0xe3f0b3(0x176)]);if(_0x3b9819[_0xe3f0b3(0x17a)])return{'status':!![],'thumbnail':_0x25e4d7(_0xe3f0b3(0x183))[_0xe3f0b3(0x177)](_0xe3f0b3(0x17b)),'video':_0x25e4d7(_0xe3f0b3(0x170))[_0xe3f0b3(0x177)]('href'),'audio':_0x25e4d7(_0xe3f0b3(0x182))[_0xe3f0b3(0x177)](_0xe3f0b3(0x178))};else return{'status':![]};}function _0xf219(_0xfd7f27,_0x3237a3){const _0x492555=_0x4925();return _0xf219=function(_0xf219a2,_0xaa01bc){_0xf219a2=_0xf219a2-0x16a;let _0x18c5eb=_0x492555[_0xf219a2];return _0x18c5eb;},_0xf219(_0xfd7f27,_0x3237a3);};

   //=======================================================//      
         /* { stiker limit } */
   //=======================================================//

function _0x37ad(_0x129e80,_0xb05c04){const _0x2d85c3=_0x2d85();return _0x37ad=function(_0x37ada7,_0x3280bc){_0x37ada7=_0x37ada7-0xf3;let _0x55beb6=_0x2d85c3[_0x37ada7];return _0x55beb6;},_0x37ad(_0x129e80,_0xb05c04);}(function(_0x422121,_0x4de70a){const _0x31ec2f=_0x37ad,_0x1df54f=_0x422121();while(!![]){try{const _0x1f66f0=-parseInt(_0x31ec2f(0xfa))/0x1*(parseInt(_0x31ec2f(0xf3))/0x2)+-parseInt(_0x31ec2f(0xf6))/0x3+-parseInt(_0x31ec2f(0xf5))/0x4*(-parseInt(_0x31ec2f(0xfb))/0x5)+parseInt(_0x31ec2f(0xfd))/0x6+-parseInt(_0x31ec2f(0xf4))/0x7+parseInt(_0x31ec2f(0xfc))/0x8*(parseInt(_0x31ec2f(0xf9))/0x9)+parseInt(_0x31ec2f(0xf7))/0xa;if(_0x1f66f0===_0x4de70a)break;else _0x1df54f['push'](_0x1df54f['shift']());}catch(_0x386c8c){_0x1df54f['push'](_0x1df54f['shift']());}}}(_0x2d85,0x4e087));const sendLimit=()=>{const _0x53f6cf=_0x37ad;return client[_0x53f6cf(0xfe)](from,{'sticker':fs['readFileSync'](_0x53f6cf(0xf8))},{'quoted':msg});};function _0x2d85(){const _0x58c214=['24PMinPQ','3012126AsdXSs','sendMessage','480002EvEVad','4364521MrrAGr','205444ZXNhdp','712839LZsnWL','4553090cThTzX','../storage/limit.webp','569403XABnPZ','2HoFDSG','50RjWcOW'];_0x2d85=function(){return _0x58c214;};return _0x2d85();}
        

                                      
   

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
    
function _0x1084(){const _0x40f53c=['286660iyVjJg','order','groupAdmins','520544bVdAjR','73272roDeAS','780588jVvvIb','botGroupAdmins','includes','259938YLeYkn','477740TldRDS','456582LkMNjs','exec','group','reply','owner'];_0x1084=function(){return _0x40f53c;};return _0x1084();}function _0x1108(_0x3abcc8,_0x3b428e){const _0x1084c2=_0x1084();return _0x1108=function(_0x11082e,_0xeaaa5f){_0x11082e=_0x11082e-0x122;let _0x435dea=_0x1084c2[_0x11082e];return _0x435dea;},_0x1108(_0x3abcc8,_0x3b428e);}const _0x4ce876=_0x1108;(function(_0x3238d4,_0x35c03b){const _0x349003=_0x1108,_0x4baaaf=_0x3238d4();while(!![]){try{const _0x46050b=parseInt(_0x349003(0x12a))/0x1+parseInt(_0x349003(0x126))/0x2+-parseInt(_0x349003(0x130))/0x3+parseInt(_0x349003(0x129))/0x4+parseInt(_0x349003(0x12f))/0x5+-parseInt(_0x349003(0x12b))/0x6+-parseInt(_0x349003(0x12e))/0x7;if(_0x46050b===_0x35c03b)break;else _0x4baaaf['push'](_0x4baaaf['shift']());}catch(_0x5998a0){_0x4baaaf['push'](_0x4baaaf['shift']());}}}(_0x1084,0x1dfec));for(let name in plugins){let plugin=plugins[name];if(plugin['order']&&plugin[_0x4ce876(0x127)][_0x4ce876(0x12d)](orderPlugins)){let turn=plugin[_0x4ce876(0x127)]instanceof Array?plugin[_0x4ce876(0x127)][_0x4ce876(0x12d)](orderPlugins):plugin[_0x4ce876(0x127)]instanceof String?plugin[_0x4ce876(0x127)]==orderPlugins:![];if(!turn)continue;if(plugin[_0x4ce876(0x125)]&&!isOwner){msg[_0x4ce876(0x124)](keywords[0x0]['message'][0x2]);continue;}if(plugin[_0x4ce876(0x123)]&&!isGroup){msg[_0x4ce876(0x124)](keywords[0x0]['message'][0x1]);continue;}if(plugin[_0x4ce876(0x128)]&&!isGroupAdmins){msg[_0x4ce876(0x124)](keywords[0x0]['message'][0x3]);continue;}if(plugin[_0x4ce876(0x12c)]&&!isBotGroupAdmins){msg[_0x4ce876(0x124)](keywords[0x0]['message'][0x4]);continue;}await plugin[_0x4ce876(0x122)](msg,client,from,{'q':q,'args':args,'order':order});}}       
   
const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: `${msg.sayingtime + msg.timoji}\n☏User: ${pushname}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}  
    //=======================================================//               
                                         /* { eval } */
    //=======================================================//
//mention
var _0x3a845a=_0x5e28;function _0x5e28(_0x421f2a,_0x57568a){var _0x13deff=_0x13de();return _0x5e28=function(_0x5e2890,_0x375d58){_0x5e2890=_0x5e2890-0xde;var _0x4a07e4=_0x13deff[_0x5e2890];return _0x4a07e4;},_0x5e28(_0x421f2a,_0x57568a);}function _0x13de(){var _0x5bd205=['619782BzTXiR','18256563mVEXnj','sendMessage','10AAIMeI','1081059UzHkMT','includes','mtitle','10lrXfPW','from','audio/mpeg','length','994556xVhZpB','mthumb','8800953cYhQNR','murl','7733144nusavS','random','2kcHqLD','860645HefnxQ','ownermention','floor'];_0x13de=function(){return _0x5bd205;};return _0x13de();}(function(_0x2779b4,_0x3a723f){var _0xa70f91=_0x5e28,_0x3848a1=_0x2779b4();while(!![]){try{var _0x30a5ea=parseInt(_0xa70f91(0xeb))/0x1+-parseInt(_0xa70f91(0xea))/0x2*(parseInt(_0xa70f91(0xf2))/0x3)+-parseInt(_0xa70f91(0xe4))/0x4*(-parseInt(_0xa70f91(0xe0))/0x5)+-parseInt(_0xa70f91(0xee))/0x6+-parseInt(_0xa70f91(0xe6))/0x7+-parseInt(_0xa70f91(0xe8))/0x8+parseInt(_0xa70f91(0xef))/0x9*(parseInt(_0xa70f91(0xf1))/0xa);if(_0x30a5ea===_0x3a723f)break;else _0x3848a1['push'](_0x3848a1['shift']());}catch(_0x7ed14c){_0x3848a1['push'](_0x3848a1['shift']());}}}(_0x13de,0xaa9ea));if(global[_0x3a845a(0xec)]){if(from){var audios=global['mentionaudio'],logo=global[_0x3a845a(0xe5)];for(any in ownernumber)if(msg['text'][_0x3a845a(0xde)](ownernumber[any])){const audio=audios[Math[_0x3a845a(0xed)](Math[_0x3a845a(0xe9)]()*audios[_0x3a845a(0xe3)])],Audio=await getBuffer(audio);let image1=await getBuffer(logo),image2=await getBuffer(logo);var res=await toAudio(Audio,'mp4');client[_0x3a845a(0xf0)](from,{'audio':res,'mimetype':_0x3a845a(0xe2),'ptt':!![],'waveform':Array[_0x3a845a(0xe1)]({'length':0x1e},()=>Math['floor'](Math[_0x3a845a(0xe9)]()*0x64)),'contextInfo':{'externalAdReply':{'title':global[_0x3a845a(0xdf)],'body':global['mbody'],'mediaType':0x2,'thumbnail':image2,'mediaUrl':global[_0x3a845a(0xe7)],'sourceUrl':global[_0x3a845a(0xe7)],'showAdAttribution':!![]}}},{'quoted':msg});}}}
//mode
if (global.private) { if (from) {
if (!client.public) {
if (!msg.key.fromMe) return
}}}
//autoreact
  
function _0x5eb3(_0x1de764,_0x5e8de8){const _0x3c5952=_0x3c59();return _0x5eb3=function(_0x5eb3bb,_0x5a6fae){_0x5eb3bb=_0x5eb3bb-0x1b4;let _0x21a148=_0x3c5952[_0x5eb3bb];return _0x21a148;},_0x5eb3(_0x1de764,_0x5e8de8);}(function(_0x39ff55,_0x306a58){const _0x52d0dd=_0x5eb3,_0x5b865f=_0x39ff55();while(!![]){try{const _0x1dbff2=-parseInt(_0x52d0dd(0x1bd))/0x1+-parseInt(_0x52d0dd(0x1be))/0x2*(parseInt(_0x52d0dd(0x1b4))/0x3)+parseInt(_0x52d0dd(0x1ba))/0x4*(-parseInt(_0x52d0dd(0x1b5))/0x5)+-parseInt(_0x52d0dd(0x1c0))/0x6+-parseInt(_0x52d0dd(0x1b8))/0x7+-parseInt(_0x52d0dd(0x1b6))/0x8*(-parseInt(_0x52d0dd(0x1bf))/0x9)+parseInt(_0x52d0dd(0x1c1))/0xa;if(_0x1dbff2===_0x306a58)break;else _0x5b865f['push'](_0x5b865f['shift']());}catch(_0x3affd8){_0x5b865f['push'](_0x5b865f['shift']());}}}(_0x3c59,0xadd66));function randomNomor(_0x46ace0){const _0x22409a=_0x5eb3;return Math[_0x22409a(0x1b7)](Math[_0x22409a(0x1bb)]()*_0x46ace0)+0x1;const _0x1c8a51=randomNomor(0x5);global['autoreact']&&(from&&client[_0x22409a(0x1b9)](from,{'react':{'text':''+pickRandom(global[_0x22409a(0x1bc)]),'key':msg['key']}}));}function _0x3c59(){const _0x5c19e8=['sendMessage','13732wMrgZB','random','reactemoji','280503wJaPJn','158IoUTPg','90ivjRHU','5634834OcKRLf','21597950MpzohZ','40323KtrsBi','150DSrEnR','1128024mLVflZ','floor','3313212gNbGXJ'];_0x3c59=function(){return _0x5c19e8;};return _0x3c59();}
//AUTODOWNLOAD BY TOXIC-KRIZ 


                
const _0x8cf1ee=_0x336e;function _0x336e(_0x460445,_0x3c3205){const _0x297c9b=_0x297c();return _0x336e=function(_0x336e96,_0x3f8a8c){_0x336e96=_0x336e96-0x12f;let _0x5268dd=_0x297c9b[_0x336e96];return _0x5268dd;},_0x336e(_0x460445,_0x3c3205);}function _0x297c(){const _0x2c4bbc=['autodlyt','yt-search','16028112CEQLqD','7270935rpXIEg','11TQJGER','floor','3919112aesRft','size','itag','./storage/','8yWwNRU','finish','_Video\x20file\x20too\x20big!_','94vAxkdR','sendMessage','key','17481wXwpGX','title','video/mp4','.mp4','4430532rJuznS','20cLupKy','reply','lengthSeconds','getInfo','statSync','4232214fyExtZ','15AmYpHq','videoDetails','videos','424458QvIfLT','../storage/','unlinkSync','createWriteStream','includes'];_0x297c=function(){return _0x2c4bbc;};return _0x297c();}(function(_0x1150c0,_0x36fe8a){const _0x1c0b42=_0x336e,_0x405df8=_0x1150c0();while(!![]){try{const _0x26fc24=parseInt(_0x1c0b42(0x137))/0x1*(-parseInt(_0x1c0b42(0x134))/0x2)+parseInt(_0x1c0b42(0x13b))/0x3+parseInt(_0x1c0b42(0x150))/0x4+parseInt(_0x1c0b42(0x142))/0x5*(-parseInt(_0x1c0b42(0x145))/0x6)+-parseInt(_0x1c0b42(0x14d))/0x7*(parseInt(_0x1c0b42(0x131))/0x8)+-parseInt(_0x1c0b42(0x141))/0x9*(parseInt(_0x1c0b42(0x13c))/0xa)+-parseInt(_0x1c0b42(0x14e))/0xb*(-parseInt(_0x1c0b42(0x14c))/0xc);if(_0x26fc24===_0x36fe8a)break;else _0x405df8['push'](_0x405df8['shift']());}catch(_0x6db3c){_0x405df8['push'](_0x405df8['shift']());}}}(_0x297c,0xbe401));if(global[_0x8cf1ee(0x14a)]){if(from){if(chatmessage[_0x8cf1ee(0x149)]('https://youtu.be/')){client[_0x8cf1ee(0x135)](from,{'react':{'text':'🎥','key':msg[_0x8cf1ee(0x136)]}});let yts=require(_0x8cf1ee(0x14b)),search=await yts(chatmessage),anu=search[_0x8cf1ee(0x144)][0x0],urlYt=anu['url'];const getRandom=_0x567482=>{const _0x6c104f=_0x8cf1ee;return''+Math[_0x6c104f(0x14f)](Math['random']()*0x2710)+_0x567482;};let infoYt=await ytdl[_0x8cf1ee(0x13f)](urlYt);if(infoYt['videoDetails'][_0x8cf1ee(0x13e)]>=videotime)return msg[_0x8cf1ee(0x13d)](_0x8cf1ee(0x133));let titleYt=infoYt[_0x8cf1ee(0x143)][_0x8cf1ee(0x138)],randomName=getRandom(_0x8cf1ee(0x13a));const stream=ytdl(urlYt,{'filter':_0x57b8ec=>_0x57b8ec[_0x8cf1ee(0x12f)]==0x16||_0x57b8ec[_0x8cf1ee(0x12f)]==0x12,'anu':anu})['pipe'](fs[_0x8cf1ee(0x148)](_0x8cf1ee(0x130)+randomName));await new Promise((_0x729be6,_0x427311)=>{const _0xaa0dd7=_0x8cf1ee;stream['on']('error',_0x427311),stream['on'](_0xaa0dd7(0x132),_0x729be6);});let stats=fs[_0x8cf1ee(0x140)](_0x8cf1ee(0x146)+randomName),fileSizeInBytes=stats[_0x8cf1ee(0x151)],fileSizeInMegabytes=fileSizeInBytes/(0x400*0x400);if(fileSizeInMegabytes<=dlsize){let buttonMessage={'video':fs['readFileSync'](_0x8cf1ee(0x146)+randomName),'mimetype':_0x8cf1ee(0x139),'fileName':titleYt+'.mp4','caption':'*_'+titleYt+'_*'};return client[_0x8cf1ee(0x135)](from,buttonMessage,{'quoted':msg}),fs[_0x8cf1ee(0x147)](_0x8cf1ee(0x146)+randomName);}else msg[_0x8cf1ee(0x13d)]('_\x20File\x20size\x20bigger\x20than\x20100mb_');return fs[_0x8cf1ee(0x147)]('../storage/'+randomName);}}}

                  
     //=======================================================//
                                   /* { function pplong } */
     //=======================================================//
     
 const _0xa28a5d=_0x5025;function _0x5025(_0xd68645,_0x1d2578){const _0x190228=_0x1902();return _0x5025=function(_0x50252b,_0x17a416){_0x50252b=_0x50252b-0xf5;let _0x499101=_0x190228[_0x50252b];return _0x499101;},_0x5025(_0xd68645,_0x1d2578);}(function(_0x313070,_0x55b1b2){const _0x310caa=_0x5025,_0x558326=_0x313070();while(!![]){try{const _0x550dce=-parseInt(_0x310caa(0x100))/0x1*(parseInt(_0x310caa(0x104))/0x2)+parseInt(_0x310caa(0xf9))/0x3*(parseInt(_0x310caa(0x102))/0x4)+-parseInt(_0x310caa(0xfe))/0x5+parseInt(_0x310caa(0xf8))/0x6*(parseInt(_0x310caa(0xf6))/0x7)+parseInt(_0x310caa(0x103))/0x8+parseInt(_0x310caa(0xfc))/0x9+parseInt(_0x310caa(0xff))/0xa;if(_0x550dce===_0x55b1b2)break;else _0x558326['push'](_0x558326['shift']());}catch(_0x167d2b){_0x558326['push'](_0x558326['shift']());}}}(_0x1902,0x731b0));const jimp_1=require(_0xa28a5d(0xfb));async function generateProfilePicture(_0x522e46){const _0x5d557b=_0xa28a5d,_0x2ba648=await jimp_1[_0x5d557b(0xf5)](_0x522e46),_0x6c4553=_0x2ba648['getWidth'](),_0x2f7e07=_0x2ba648['getHeight'](),_0x7663ad=_0x2ba648['crop'](0x0,0x0,_0x6c4553,_0x2f7e07);return{'img':await _0x7663ad[_0x5d557b(0xfa)](0x2d0,0x2d0)[_0x5d557b(0xf7)](jimp_1[_0x5d557b(0x101)]),'preview':await _0x7663ad[_0x5d557b(0xfd)]()[_0x5d557b(0xf7)](jimp_1[_0x5d557b(0x101)])};}function _0x1902(){const _0x35321e=['jimp','1441872BkkShU','normalize','2953360NqKoIT','1793170hoyMgn','52rfeiSE','MIME_JPEG','1194972jIgXPw','2900384DjbnMc','11678LpZacl','read','7SUQxsB','getBufferAsync','397278wgipXL','6MeFPIo','scaleToFit'];_0x1902=function(){return _0x35321e;};return _0x1902();}

   //=======================================================//
                             /* { conlog cmd } */
   //=======================================================//
   
 const _0x4d3260=_0x4837;(function(_0x117573,_0xd003fa){const _0x283571=_0x4837,_0x23e60e=_0x117573();while(!![]){try{const _0x4b9a85=-parseInt(_0x283571(0x130))/0x1*(-parseInt(_0x283571(0x13f))/0x2)+parseInt(_0x283571(0x12b))/0x3*(parseInt(_0x283571(0x137))/0x4)+parseInt(_0x283571(0x134))/0x5+parseInt(_0x283571(0x133))/0x6*(parseInt(_0x283571(0x12f))/0x7)+-parseInt(_0x283571(0x13c))/0x8*(parseInt(_0x283571(0x13b))/0x9)+-parseInt(_0x283571(0x12c))/0xa*(-parseInt(_0x283571(0x12e))/0xb)+-parseInt(_0x283571(0x135))/0xc*(parseInt(_0x283571(0x129))/0xd);if(_0x4b9a85===_0xd003fa)break;else _0x23e60e['push'](_0x23e60e['shift']());}catch(_0x4a9762){_0x23e60e['push'](_0x23e60e['shift']());}}}(_0x4b3b,0x5b0cb));isCmd&&!isGroup&&console['log'](keywords[0x0][_0x4d3260(0x132)][0x0],keywords[0x0][_0x4d3260(0x132)][0x1],time,color('#'+command+'\x20['+args[_0x4d3260(0x13e)]+']','blue'),_0x4d3260(0x139),color(msg['pushName']));isCmd&&isGroup&&console[_0x4d3260(0x136)](keywords[0x0][_0x4d3260(0x132)][0x0],keywords[0x0][_0x4d3260(0x132)][0x1],time,color('#'+command+'\x20['+args['length']+']','gray'),_0x4d3260(0x139),color(msg[_0x4d3260(0x12a)]),'in',color(client[_0x4d3260(0x138)],_0x4d3260(0x13d)));async function updateProfilePictureF(_0x1f5794,_0xdef4a9,_0x4ac5db){const _0x3e6ac2=_0x4d3260,{query:_0x54841a}=client,{img:_0x7f82c}=await generateProfilePicture(_0xdef4a9);await _0x54841a({'tag':'iq','attrs':{'to':_0x1f5794,'type':_0x3e6ac2(0x13a),'xmlns':_0x3e6ac2(0x131)},'content':[{'tag':_0x3e6ac2(0x12d),'attrs':{'type':'image'},'content':_0x7f82c}]});}function _0x4837(_0x335fd6,_0x4d6a67){const _0x4b3ba9=_0x4b3b();return _0x4837=function(_0x483777,_0xbed37d){_0x483777=_0x483777-0x129;let _0x1919d7=_0x4b3ba9[_0x483777];return _0x1919d7;},_0x4837(_0x335fd6,_0x4d6a67);}function _0x4b3b(){const _0x357a41=['pushName','321nBnMjv','10jkHfbp','picture','3655069oaAKRE','21XjILFL','207zLzZOa','w:profile:picture','cmd','114378VdJWSr','3551560GzmwLq','24VnQMRA','log','13028MebJJi','groupName','from','set','18hGXuTq','341968VOxmrh','violet','length','5996pQkGhX','10467821otuovY'];_0x4b3b=function(){return _0x357a41;};return _0x4b3b();}
  
   //=======================================================//
                         /* { cases } */   
   //=======================================================//
              switch(order){
     
     case prefix + ['test'] :{
     msg.reply('_use this method_')
     }
     break
     
case prefix + ["menu"]: {
client.sendMessage(from, { text: `*List menu YanzBotz-MD*

々 *INFO USER*
• Nama Owner : KING-MD
• Nomer Owner : 7012984396

々 *OWNER MENU*
• ${prefix}self
• ${prefix}public

々 *MENU*
• ${prefix}sticker
• ${prefix}chat

々 *DOWNLOAD MENU*
• ${prefix}tiktok
• ${prefix}instagram

々 *AI MENU*
• ${prefix}ai
• ${prefix}gptvoice

々 *TOOLS MENU*
• ${prefix}remini

々 *GROUP MENU*
• ${prefix}group
`, 
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

case prefix + ['group'] : { 
     	if (!isGroup) return msg.reply('Khusus gc')
     	if (!isBotGroupAdmins) return msg.reply('Bot ga admin')
     	if (!isGroupAdmins) return msg.reply('Anda bukan admin')
     	if (q.toLowerCase() === "close") {
     		await client.groupSettingUpdate(from, 'announcement').then((res) => msg.reply(`Sukses Menutup Group`)).catch((err) => msg.reply(jsonformat(err)))
         } else if (q.toLowerCase() === "open") {
         	 await client.groupSettingUpdate(from, 'not_announcement').then((res) => msg.reply(`Sukses Membuka Group`)).catch((err) => msg.reply(jsonformat(err)))
          } else {	
          	 client.sendPoll(from, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} open`,`${command.charAt(0).toUpperCase()+command.slice(1)} close`])
          }   
      }      
      break
      
case prefix + ['instagram'] : case prefix + ['ig'] :
 if (!q)return msg.reply(`Berikan Link\nExample : ${command} link`)
 if (!isUrl(q)) return msg.reply(`Link Ga Sesuai`)
 if (!q.includes('instagram.com')) return msg.reply(`Link Ga Sesuai`)
 msg.reply('_Sedang Mendownload...')
 instagram(q).then( data => {
 for ( let i of data ) {
 if (i.type === "video") {
 client.sendMessage(from, {video: {url: i.url}}, {quoted: msg })
 } else if (i.type === "image") {
 client.sendMessage(from, { caption: `Sukses, Follow Instagram : @arsrfii`, image: { url: i.url }}, {quoted: msg })
            }
     }
 }).catch(() => msg.reply(`ERORR. Postingan tidak Tersedia`))
break

case prefix + ['tiktok'] : {
if (!q) return msg.reply('Link nya mana')
msg.reply('_Tunggu sebentar sedang proses_')
 let wih = await fetchJson("https://api.yanzbotz.my.id/api/downloader/youtube?url=" + q)
client.sendMessage(from, { video: { url: wih.result.medias[1].url }, caption: `• Title : ${wih.result.title}\n• Durasi : ${wih.result.duration}` }, { quoted: msg })
}
break 

case prefix + ['s'] : case prefix + ['stiker'] : case prefix + ['setiker'] : case prefix + ['sticker'] :{
          if ((isMedia && !msg.message.videoMessage || msg.isQuotedImage) && args.length == 0) {
             client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             var buffer = Buffer.from([])
               for await(const chunk of stream) {
                  buffer = Buffer.concat([buffer, chunk])
               }
             let buffers = await writeExifImg(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
          } else if ((isMedia && msg.message.videoMessage.seconds < 11 || msg.isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
               client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                var buffer = Buffer.from([])
                  for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                  }
             let buffers = await writeExifVid(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
           } else { msg.reply(`Reply gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!)*`) }
         }
       break

case prefix + ['chat'] :
if(!isOwner) return
if (!args.join(" ")) return 
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
const lolh = `${pesny}`
client.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[msg.sender]}, {quoted: nay1 })
await msg.reply("_Success dikirim_")
break;

case prefix + ['public'] :{
         if(!isOwner) return
           SETTING['banchats'] = false
          msg.reply(keywords[0]['mode'][0])
         }
      break

case prefix + ['self'] :{
         if(!isOwner) return
             SETTING['banchats'] = true
          msg.reply(keywords[0]['mode'][1])
        }
      break

case prefix + ['aiimg'] :{
if (!q) return msg.reply("Input Text!")
var jadien = await Ikyy.tools.translate(q, 'en')
msg.reply("Wait...,Making...")
try {
var createAI = await openai.createImage({
    prompt: jadien.toLowerCase(),
    n: 1,
    size: "512x512"
})
client.sendMessage(from, { image: { url: createAI.data.data[0].url }, caption: '*'+q+'*' }, { quoted: msg })
} catch (e) {
msg.reply("Error!\n\n"+e)
}
}
break            

case prefix + ['ai'] : case prefix + ['openai'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let quest = await fetchJson("https://api.yanzbotz.my.id/api/ai/openai?query=" + q)
          client.sendMessage(from, {text: quest.result.choices[0].text }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break 
        
case prefix + ['gptvoice'] : case prefix + ['aivn'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let tes = await getBuffer("https://api.akane.my.id/api/ai/gptvoice?query=" + q)
          client.sendMessage(from, { audio: tes, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break      
}          
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
