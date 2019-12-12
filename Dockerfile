FROM node:10

WORKDIR /opt/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD npm run dockerdev