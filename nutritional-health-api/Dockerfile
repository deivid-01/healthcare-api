FROM node:14

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . .

WORKDIR /usr/src/app/nutritional-health-api

RUN npm install

EXPOSE 3000

CMD ["npm","start"]