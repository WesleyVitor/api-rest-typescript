FROM node:17-slim

WORKDIR /app/

COPY package.json package-lock.json /app/

RUN npm ci --silient

COPY . .

EXPOSE 3000

USER node

CMD npm run dev