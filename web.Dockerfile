FROM alpine:latest

# Install nodejs
RUN apk add --update npm

# Install pnpm
RUN npm install -g pnpm

# Create the beatforge user
RUN addgroup -S beatforge && adduser -S beatforge -G beatforge

# Switch to the beatforge user
# USER beatforge

# Create the app directory
WORKDIR /app

COPY . .
RUN pnpm install --filter web --prod

# Switch to the web directory
WORKDIR /app/apps/web/

# Expose the port
EXPOSE 3000

CMD ["npm", "run", "run"]
