FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./
RUN yarn
RUN yarn add sharp
RUN yarn cache clean --force

FROM node:20-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN mv .env.prod .env.production

RUN yarn build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/ ./

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
