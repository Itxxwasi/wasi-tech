FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Itxxwasi/wasi-tech /root/Itxxwasi
WORKDIR /root/Itxxwasi/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
