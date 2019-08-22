FROM node:10.16.0-jessie

LABEL maintainer_email="universetennis@gmail.com"
LABEL maintainer="daniel"

RUN npm i -g npm@6.9.0
RUN npm i -g npx
RUN useradd --user-group --create-home --shell /bin/bash app
RUN mkdir -p /home/client/node_modules
RUN chown -R app:app /home/client/

USER app
WORKDIR /home/client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

EXPOSE 8080
CMD ["npm", "run", "server:prod"]