FROM node:16.17.0-bullseye-slim
ENV NODE_ENV production
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]