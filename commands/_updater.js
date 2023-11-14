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
 * @author : Slasher-Official <https://github.com/X-S-L-A-S-H-E-R>   
 * @description : Secktor-2.0 ,A Multi-functional whatsapp bot.       
 * @version 2.0.1                                                                                             
 ========================================================
 **/

 
const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "tool",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) { citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)} 
            else {
                let update = await DB.sync()
                return await Void.sendMessage(citel.chat, { text: update,});
            }

        }
    )
  
