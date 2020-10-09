FROM node:14.9.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

CMD npm start