FROM node:14

RUN mkdir -p /opt/app

RUN chown node:node /opt/app

WORKDIR /opt/app

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .

USER node

RUN yarn

COPY --chown=node:node . .

CMD yarn start:prod
