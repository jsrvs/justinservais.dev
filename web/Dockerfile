FROM node:24-alpine AS build
WORKDIR /src

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
# Path is dist/<angular project name>/browser — changes if the project is renamed.
COPY --from=build /src/dist/web/browser /srv
