FROM node:14.16.0-buster
WORKDIR /srv
COPY app.js server.js package.json /srv/
RUN npm install
ENTRYPOINT ["npm", "start"]




