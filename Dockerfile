FROM node:17.2.0 as build
USER node
WORKDIR /app
COPY --chown=node:node ["package.json", "package-lock.json", "/app/"]
RUN npm ci
COPY --chown=node:node . .
RUN npm run build
RUN npm run generate

FROM nginx:1.21.4
COPY --from=build /app/dist /usr/share/nginx/html
