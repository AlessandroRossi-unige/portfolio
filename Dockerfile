FROM node:alpine

WORKDIR /usr/server/app

RUN apk add --update nodejs npm

RUN apk add --update npm

COPY ./package.json ./

RUN npm install

COPY ./ .

RUN npm run build # will build remix app

ENV NODE_ENV=production

CMD ["npm", "run", "start"]