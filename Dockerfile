# Etapa 1: Build
FROM node:20-alpine AS builder

# Instala ferramentas úteis
RUN apk add --no-cache libc6-compat

# Define diretório de trabalho
WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copia arquivos de dependência
COPY package.json pnpm-lock.yaml* ./

# Instala dependências via pnpm
RUN pnpm install --frozen-lockfile

# Copia o restante do projeto
COPY . .

# Build da aplicação
RUN pnpm build

# Remove dependências de dev
RUN pnpm prune --prod

# Etapa 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

# instala pnpm globalmente
RUN npm install -g pnpm

ENV NODE_ENV=production

# Copia apenas os arquivos necessários para runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NEXT_PUBLIC_API_URL=https://api.coingecko.com/api/v3

# Expõe porta padrão do Next.js
EXPOSE 3000

# Comando de start
CMD ["pnpm", "start"]