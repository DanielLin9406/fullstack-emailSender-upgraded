FROM node:8.16.0-jessie

RUN npm i -g npm@5.6.0
RUN useradd --user-group --create-home --shell /bin/false app
RUN mkdir -p /tmp/email-sender/node_modules
RUN chown -R app:app /tmp/email-sender

ENV HOME=/tmp
ENV CLIENT_ID_DEV=357528010458-er390kgdk5npcmoorhm9snmq48pslkt1.apps.googleusercontent.com
ENV CLIENT_SECRET_DEV=cm3k9UqHwIL9U3Z82zrX6UYA
ENV COOKIE_KEY_DEV=wefecmaldijaeerdnmk
ENV DATABASE_URL_DEV=mongodb+srv://user1:MongoDB123!@meow-fkgt0.gcp.mongodb.net/test?retryWrites=true
ENV STRIPE_PUB_KEY=pk_test_PjuoNpPOVWYdA2izgIRyuIlz00l2VBCmnE
ENV REDIRECT_DOMAIN=http://localhost:8080
ENV PORT=5000


USER app
COPY . $HOME/email-sender/
WORKDIR $HOME/email-sender

RUN npm i

EXPOSE 5000

CMD npm start