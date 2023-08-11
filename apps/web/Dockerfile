FROM alpine:latest

# Install nodejs
RUN apk add --update npm

# Install pnpm
RUN npm install -g pnpm

# Create the beatforge user
RUN addgroup -S beatforge && adduser -S beatforge -G beatforge

# Switch to the beatforge user
USER beatforge

# Create the app directory
WORKDIR /app

# Install client dependencies
COPY package*.json ./
RUN pnpm install --prod

# Bundle app build
COPY build ./build

# Expose the port
EXPOSE 3000
CMD ["node", "build"]
