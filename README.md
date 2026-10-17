# `thio.dev` — Personal Engineering Console, Blog, Showcase & Live Agent Office

Static engineering platform, architecture lab, and live 2D/3D Agent Command Bridge for **Herdi Agusthio**, built with **Astro 7 SSG** and served directly by **Caddy** from `/var/www/thio.dev` (`0 MB` runtime daemon memory).

---

## 🌐 Live Public Routes

- **System Console (Home)**: [`https://thio.103.217.144.64.nip.io/`](https://thio.103.217.144.64.nip.io/)
- **Engineering Blog & Reflections**: [`https://thio.103.217.144.64.nip.io/blog`](https://thio.103.217.144.64.nip.io/blog)
- **Architecture Showcase, Labs & ADRs (`001`–`015`)**: [`https://thio.103.217.144.64.nip.io/showcase`](https://thio.103.217.144.64.nip.io/showcase)
- **Autonomous 7-Agent Command Bridge (2D/3D Live Office)**: [`https://thio.103.217.144.64.nip.io/office`](https://thio.103.217.144.64.nip.io/office)
- **KubeQuest Interactive Kubernetes Odyssey**: [`https://thio.103.217.144.64.nip.io/k8s/`](https://thio.103.217.144.64.nip.io/k8s/)
- **Sanitized Public Telemetry Bridge API**: [`https://api.thio.103.217.144.64.nip.io/office`](https://api.thio.103.217.144.64.nip.io/office)

---

## 🚀 How-To-Use & Verification Commands

### 1. Sync Second-Brain Content, Build & Deploy to `/var/www/thio.dev`
```bash
cd ~/code-storage/thio.dev
./ship.sh
```
*(Automatically runs `scripts/sync-content.mjs` from `~/code-storage/second-brain`, compiles static routes + JSON-LD schemas into `dist/`, verifies `dist/index.html` and `dist/k8s/index.html`, and syncs to `/var/www/thio.dev/`.)*

### 2. Verify Live Routes & JSON-LD Schema via `curl`
```bash
# Verify Homepage, Blog, Showcase, Office, and KubeQuest HTTP 200
for path in "/" "/blog/" "/showcase/" "/office/" "/k8s/"; do
  printf "%-15s -> HTTP %s\n" "$path" "$(curl -s -o /dev/null -w '%{http_code}' https://thio.103.217.144.64.nip.io$path)"
done

# Inspect JSON-LD Structured Schema on latest Blog Post
curl -s https://thio.103.217.144.64.nip.io/blog/refactoring-ai-agent-cockpit-zero-dependency-bun-dan-ui-ux-overhaul/ | grep -o '<script type="application/ld+json">.*</script>'

# Verify Live 7-Agent Office Telemetry API
curl -s https://api.thio.103.217.144.64.nip.io/office | jq .summary
```

### 3. Run Security & Quality Gate
```bash
/home/thiohermes/.hermes/scripts/sdlc-scanner.sh ~/code-storage/thio.dev
```
