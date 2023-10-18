FROM node:16.3.0-alpine

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

WORKDIR /app

COPY ./ ./

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD yarn start
