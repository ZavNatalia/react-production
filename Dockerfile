# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:17.4-alpine AS builder
WORKDIR /app
COPY package*.json /app/
COPY ./ /app/
RUN npm install
RUN npm run build:prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=builder /app/build/ /usr/share/nginx/html

RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
