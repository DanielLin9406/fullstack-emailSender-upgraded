FROM node:8.16.0-jessie

LABEL maintainer_email="universetennis@gmail.com"
LABEL maintainer="daniel"

RUN npm i -g npm@5.6.0
RUN useradd --user-group --create-home --shell /bin/bash app
RUN mkdir -p /home/node-backend/node_modules
RUN chown -R app:app /home/node-backend/

USER app
WORKDIR /home/node-backend
COPY package*.json /home/node-backend/
RUN npm install

EXPOSE 5000
CMD ["npm", "start"]