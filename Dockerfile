From node:latest

COPY . .

# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN npm install

ENV PORT 80

EXPOSE 80

CMD ["node", "index.js;"]
