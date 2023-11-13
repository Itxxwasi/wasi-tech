FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/X-S-L-A-S-H-E-R/Secktor-2.0 /root/X-S-L-A-S-H-E-R
WORKDIR /root/X-S-L-A-S-H-E-R/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
