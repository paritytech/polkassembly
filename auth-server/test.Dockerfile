FROM node:12

RUN mkdir -p /opt/test

RUN chown node:node /opt/test

WORKDIR /opt/test

COPY --chown=node:node package.json .

COPY --chown=node:node yarn.lock .

USER node

RUN yarn

COPY --chown=node:node . .

CMD yarn test:dangerous
