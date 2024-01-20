

const { Configuration, OpenAIApi } = require{"openai"}

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')

const axios = require('axios')

const speed = require('performance-now')

cmd({

        pattern: "gpt",

        desc: "chat with an AI",

        category: "general",

        use: '<Hii,user im gpt created by wasi>',

        filename: __filename,

    },

    async(Void, citel,text) => {

      if (!text) return citel.reply(`Please Write text\n\nExample:\n${usedPrefix}${command} How Are You? `);

            const configuration = new Configuration({

              apiKey: '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', // Create Your Key

            });                  // https://platform.openai.com/account/api-keys

            const openai = new OpenAIApi(configuration);

            const response = await openai.createChatCompletion({

          model: "gpt-3.5-turbo",

          messages: [{role: "user", content: text}],

          });

          citel.reply(`${response.data.choices[0].message.content}`);

          } catch (error) {

          if (error.response) {

            console.log(error.response.status);

            console.log(error.response.data);

            console.log(`${error.response.status}\n\n${error.response.data}`);

          } else {

            console.log(error);

            citel.reply("Please Wait I'm Getting API update rn... Please Try Later\n\tError Message :"+ error.message);

          }

        }

)
