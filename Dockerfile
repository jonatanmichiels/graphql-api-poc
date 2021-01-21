FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci
RUN npx prisma migrate dev --preview-feature
RUN npx prisma generate
RUN npm run seed

COPY . .

EXPOSE 4000
EXPOSE 5555
CMD [ "npm", "start" ]