FROM node:14-alpine3.15
COPY . /front
WORKDIR /front
RUN npm i && npm i nodemon
ENTRYPOINT ["npx", "nodemon"]