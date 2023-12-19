
/**
========================================================
      █▀ █▀▀ █▀▀ ▀█▀ █▀█ █▀█ ▄▄ ▀█ ░ █▀█           |•|
      ▄█ ██▄ █▄▄ ░█░ █▄█ █▀▄ ░░ █▄ ▄ █▄█           |•|
========================================================

 Copyright (C) 2022.                                     
 Licensed under the  GPL-3.0 License;                    
 You may not use this file except in compliance with the License.  
 It is supplied in the hope that it may be useful                           
 * @project_name : Secktor-2.0                                             
 * @author : Slasher-Official <https://github.com/X-S-L-A-S-H-E-R
 * @description : Secktor-2.0 ,A Multi-functional whatsapp bot.   
 * @version 2.0.1                                                                               
 ========================================================
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "core",
            react: "📟",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `┎───⊷❮ *${Config.botname}* ❯───⊷❍\n`
                str +=
                    '```' + `┃✦╭──────────────◆
┃✦┃ 𝙋𝙡𝙪𝙜𝙞𝙣𝙨: ${commands.length}
┃✦┃ 𝙐𝙨𝙚𝙧: ${citel.pushName}
┃✦┃ 𝙊𝙬𝙣𝙚𝙧: ${Config.ownername}
┃✦┃ 𝙋𝙧𝙚𝙛𝙞𝙭: [ ${prefix} ]
┃✦┃ 𝙈𝙚𝙢: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃✦┃ 𝘿𝙖𝙩𝙚: ${date}
┃✦┃ 𝙈𝙤𝙙𝙚: ${Config.worktype}
┃✦┃ 𝙋𝙡𝙖𝙩𝙚𝙛𝙤𝙧𝙢: Kali•Linux
┃✦┃ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣: 1.1.1
┃✦┃ 
┃✦┃ ▒▓ ▍▌▌▉▏▎▌▉▐▏▌▓▒
┃✦┃ ▒▓ ▍▌▌▉▏▎▌▉▐▏▌▓▒
┃✦┃ 
┃✦┃ © 𝘽𝙮: ${Config.ownername}
┃✦╰━━━━━━━━━━━───◆
╰━━━━━━━━━━━──⊷✦\n
` + '```'
                for (const category in cmds) 
                {
                   str += `╭━═══〘 *${tiny(category)}* 〙═══━⊷❍\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╭━═══〘 *${tiny(category)}* 〙═══━⊷❍\n` ;      
                        for (const plugins of cmds[category]) { str += `┃✷│ ${fancytext(plugins,1)}\n` ; }
                        str += `╰━═════════════━⊷❍\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `┃✷│ ${fancytext(plugins,1)}\n` ; }
                         str += `╰━═════════════━⊷❍\n`  ; 
                   }
  
                }
                str+= `🔥 𝙆𝙄𝙉𝙂-𝙈𝘿  🎯`
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
/** Secktor.cmd({
              pattern: "list",
              desc: "list menu",
              category: "core",
              react: "⚜️"
           },
          async(Void, msg , text ) => {
            
              const { commands } = require('../lib');
              text = `
  ╭━━〘 *${Config.botname}* 〙────⊷     
  ┃ ✭ Owner: ${Config.ownername}
  ┃ ✭ Uptime: ${runtime(process.uptime())}
  ╰━━━━━━━━━━━━━━⊷\n`
  text = '';
              for (let i = 0; i < commands.length; i++){if(commands[i].pattern==undefined){ continue; }else { text += `*${i+1} ${fancytext(commands[i].pattern,1)}*\n  ${fancytext(commands[i].desc,1)}\n`}}
  
              
   
   //str += `╰━━━━━━━━━━━───⊷\nNaveed-Dogar \n www.youtube.com/c/technicalnaveed`
             try{ return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: text + Config.caption}); }catch{return await send(citel,str,{},"",citel);}
          }
      )
      
      **/
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "core",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "core",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
  
