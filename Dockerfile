FROM node:12-alpine

WORKDIR /usr/app
COPY lib lib
COPY scripts scripts
COPY package.json .
COPY swagger.json .
COPY VERSION .

RUN npm install

CMD ["npm", "start"]