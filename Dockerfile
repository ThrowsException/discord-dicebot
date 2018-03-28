FROM node:alpine
COPY app.js package.json ./
RUN npm i
CMD ["node", "app.js"]
