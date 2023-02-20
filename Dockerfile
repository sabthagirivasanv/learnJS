FROM node:alpine
COPY . /learnJS
WORKDIR /learnJS
CMD node HelloWorld.js