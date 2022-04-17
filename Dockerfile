FROM node:17-slim
WORKDIR /app
# RUN apt-get update \
#     && apt-get install -y build-essential graphicsmagick imagemagick
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

RUN npm install 


RUN npx prisma generate

EXPOSE 3000

CMD npx prisma generate dev && npm run dev