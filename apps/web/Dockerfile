FROM node:lts-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm install --filter="web"
RUN pnpm run build --filter="web"

EXPOSE 4173
CMD ["pnpm", "run", "--filter=web", "preview", "--host"]  