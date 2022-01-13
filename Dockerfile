FROM node:17.3.1 as build
USER node
WORKDIR /app
COPY --chown=node:node ["package.json", "package-lock.json", "/app/"]
RUN npm ci
COPY --chown=node:node . .
RUN npm run build
RUN npm run generate

FROM nginx:1.21.5
COPY --from=build /app/dist /usr/share/nginx/html
