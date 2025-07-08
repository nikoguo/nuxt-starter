FROM node:22-alpine
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY .output/ ./

# Change the port and host
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]