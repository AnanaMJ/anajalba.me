FROM node:erbium
ARG NPM_FONT_AWESOME_TOKEN

WORKDIR /usr/src/app

# dependencies
COPY package.json yarn.lock .npmrc ./
RUN yarn

# source code
COPY . ./

# compile
RUN yarn build

# run
EXPOSE 3000
CMD ["yarn", "start"]
