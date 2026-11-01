# Sample second-brain

A tiny stand-in for the private `second-brain` repo, used by CI and by anyone without it:

```bash
SECOND_BRAIN_DIR=fixtures/second-brain npm run dev
```

Public files (one per kind, plus a superseded ADR and an Indonesian `lang: id` post) must build; every file containing `PRIVATE-FIXTURE` must never reach `dist/` — CI fails if it does (including `decisions/sdlc-sample-ticket.md`: `status: accepted` but not a numbered ADR). Only `decisions/`, `knowledge/{blog,engineering}/` and `infrastructure/catalog.json` are synced. The catalog has one public app (`sample-site`), one internal app and one without `visibility`, with `PRIVATE-FIXTURE` in every field the public projection must drop (host IP and kernel, the internal app's domains, routes and databases, the public app's tables and columns). Fields that are kept but scrubbed carry markers too: an email and port in the public app's purpose, a `host:port` in its database summary, and a `public_domain` embedding a private IP (`10-0-0-1.nip.io`). URL hosts are lowercased, so CI greps case-insensitively.
