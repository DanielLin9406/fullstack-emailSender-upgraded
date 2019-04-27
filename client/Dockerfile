FROM node:8.16.0-jessie

LABEL maintainer_email="universetennis@gmail.com"
LABEL maintainer="daniel"

RUN npm i -g npm@5.6.0
RUN npm i -g npx
RUN useradd --user-group --create-home --shell /bin/bash app
RUN mkdir -p /home/node-frontend/node_modules
RUN chown -R app:app /home/node-frontend/

USER app
WORKDIR /home/node-frontend
COPY package*.json /home/node-frontend/
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "start:dev"]