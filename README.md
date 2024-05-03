# The New Daily - Scheduled Posts Worker

## Run locally

Add vars

```
WORDPRESSS_DOMAIN="https://..."
```

Run

```
npx wrangler dev --test-scheduled
```

Rquest to kick it off

```
curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"
```

## Deploy

```
npx wrangler deploy
```

## Docs

- [Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/)
