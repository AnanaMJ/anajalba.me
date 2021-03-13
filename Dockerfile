FROM node:erbium

WORKDIR /usr/src/app

# dependencies
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn

# source code
COPY . ./

# compile
RUN yarn build

# run
EXPOSE 3000
CMD ["yarn", "start"]
