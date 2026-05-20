# syntax=docker/dockerfile:1

# ──────────────────────────────────────────────
# Stage 1 — install dependencies
# ──────────────────────────────────────────────
FROM node:24-alpine AS deps

# Refresh Alpine packages so the base picks up security fixes (scanners often flag stale musl/ssl).
# libc6-compat is needed for some Alpine/musl compatibility with npm packages
RUN apk upgrade --no-cache \
    && apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# ──────────────────────────────────────────────
# Stage 2 — build the application
# ──────────────────────────────────────────────
FROM node:24-alpine AS builder

RUN apk upgrade --no-cache

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ──────────────────────────────────────────────
# Stage 3 — minimal production runtime
# ──────────────────────────────────────────────
FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Dedicated non-root user for security
RUN apk upgrade --no-cache \
    && addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# standalone output contains a self-contained server.js with only required deps
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
