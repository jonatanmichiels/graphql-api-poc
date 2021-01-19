FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 4000
EXPOSE 5555
CMD [ "npm", "run", "start" ]