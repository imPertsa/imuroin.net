# imuroin.net

Personal landing page built with React and Vite.

## Requirements
- Bun 1.1+

## Development
```bash
bun install
bun run dev
```
Open `http://localhost:5173` in your browser.

## Build and preview
```bash
bun run build
bun run preview
```

## Docker (production)
```bash
docker compose up -d web
```
For TLS, set your domain in `nginx/default.conf` and issue certs with Certbot.

## Makefile shortcuts
- `make install`
- `make dev`
- `make build`
- `make preview`
- `make docker-up`
- `make docker-down`
