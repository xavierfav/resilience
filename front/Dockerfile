FROM node:10.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@v6.2.2
COPY . .
RUN npm install --silent
