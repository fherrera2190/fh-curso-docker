FROM node:19-alpine3.15 AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:19-alpine3.15 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.23.3 AS prod
EXPOSE 80

# Copiar archivos de build a la carpeta de nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY assets /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# Copiar archivos desde el directorio actual al contenedor
#COPY . /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
