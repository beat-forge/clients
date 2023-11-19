FROM alpine:latest

# Install nodejs
RUN apk add --update npm

# Install pnpm
RUN npm install -g pnpm

# Create the app directory
WORKDIR /app
COPY . .

# Switch to the web-legacy directory
WORKDIR /app/apps/web/

# Expose the port
EXPOSE 3000

CMD ["npm", "run", "run"]
