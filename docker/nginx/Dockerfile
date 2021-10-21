FROM node:12-alpine as builder

COPY package.json ./

RUN npm config set registry https://registry.npm.taobao.org && npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

ARG env=production

RUN npm run build -- --prod --configuration $env

FROM nginx:1.14.2-alpine

COPY ./docker/nginx/conf/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]
