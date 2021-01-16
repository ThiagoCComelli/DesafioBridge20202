FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

copy . .

EXPOSE 3000

CMD ["npm","start"]