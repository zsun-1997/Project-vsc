FROM node:12.18.0-alpine3.12

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

ADD . /usr/src/app
RUN npm run build
CMD [ "node", "build/server.js" ]