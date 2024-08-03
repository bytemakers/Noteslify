FROM node:14-alpine3.15
COPY . /back
WORKDIR /back
ENV DB="mongodb"
RUN npm install && npm install nodemon
ENTRYPOINT ["npx", "nodemon"]
