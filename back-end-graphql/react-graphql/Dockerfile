# base image
FROM node:8.9-alpine

# set working directory
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# add `/usr/src/app/node_modules/.bin` to $PATH
RUN npm install --production --silent && mv node_modules ../

EXPOSE 3000