FROM node:17-slim

# RUN apt-get update \
#     && apt-get install -y build-essential graphicsmagick imagemagick

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install 

COPY . .

EXPOSE 3000

CMD npm run dev