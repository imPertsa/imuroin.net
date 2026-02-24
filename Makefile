SHELL := /bin/sh

.PHONY: install dev build preview docker-up docker-down docker-logs docker-restart

install:
	bun install

dev:
	bun run dev

build:
	bun run build

preview:
	bun run preview

docker-up:
	docker compose up -d web

docker-down:
	docker compose down

docker-logs:
	docker compose logs -f --tail=100

docker-restart:
	docker compose restart web
