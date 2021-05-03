FROM node:12.15-alpine

WORKDIR /var/www/frontend

COPY package.json /var/www/frontend/package.json
RUN npm install

COPY . /var/www/frontend
RUN npm run build
