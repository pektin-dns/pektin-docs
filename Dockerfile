# 0. build stage
FROM node:alpine as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

# 1. execution stage
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./server/nginx.conf.template /etc/nginx/templates/default.conf.template
