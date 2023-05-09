FROM king-md/naveeddogar:md-beta

RUN git clone https://github.com/naveeddogar/King-MD /root/king-md

WORKDIR /root/king-md/

ENV TZ=Europe/Istanbul

RUN yarn add supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]

