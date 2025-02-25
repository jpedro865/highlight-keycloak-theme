FROM node:22.14.0-alpine3.21
RUN apk update && apk --no-cache upgrade
COPY . /app
WORKDIR /app
RUN yarn install
CMD ["yarn", "storybook"]
EXPOSE 6006