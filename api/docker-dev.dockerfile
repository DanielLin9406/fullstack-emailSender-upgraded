FROM node:10.16.0-jessie

LABEL maintainer_email="universetennis@gmail.com"
LABEL maintainer="daniel"

RUN npm i -g npm@6.9.0
RUN useradd --user-group --create-home --shell /bin/bash app
RUN mkdir -p /home/server/node_modules
RUN chown -R app:app /home/server/

USER app
WORKDIR /home/server
COPY package*.json ./
RUN npm install

EXPOSE 5000
CMD ["npm", "run", "server"]