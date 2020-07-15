# build
FROM node:lts-alpine as build-stage

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

# production
FROM node:lts-alpine  as production-stage

WORKDIR /app
COPY --from=build-stage ./app/dist ./dist
COPY package* ./
RUN npm i --production

EXPOSE 3000

CMD npm start