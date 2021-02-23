FROM node:10-alpine
ENV APP_ROOT /web
# ENV NODE_ENV production

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci
RUN npm run build

CMD ["npm", "run", "start"]
