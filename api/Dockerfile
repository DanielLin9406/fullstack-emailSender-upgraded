FROM node:10.16.0-jessie

LABEL maintainer_email="universetennis@gmail.com"
LABEL maintainer="daniel"

RUN npm i -g npm@5.6.0
RUN useradd --user-group --create-home --shell /bin/bash app
RUN mkdir -p /home/api/node_modules
RUN chown -R app:app /home/api/

USER app
WORKDIR /home/api
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "prod"]