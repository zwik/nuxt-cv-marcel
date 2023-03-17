FROM node:19.8.1 as build
USER node
WORKDIR /app
COPY --chown=node:node ["package.json", "package-lock.json", "/app/"]
RUN npm ci
COPY --chown=node:node . .
RUN npm run build
RUN npm run generate

FROM nginx:1.23.3
COPY --from=build /app/dist /usr/share/nginx/html
