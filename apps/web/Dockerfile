FROM alpine:latest

# Install nodejs
RUN apk add nodejs

# Create the beatforge user
RUN addgroup -S beatforge && adduser -S beatforge -G beatforge

# Switch to the beatforge user
USER beatforge

# Create the app directory
WORKDIR /app

# Copy the app
COPY package*.json ./
COPY build ./build

# Expose the port
EXPOSE 3000
CMD ["node", "build"]
