FROM node:14-alpine3.15
COPY . .
ENV DB="mongodb"
RUN npm install
CMD ["node", "index.js"]
