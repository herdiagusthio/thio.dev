# Sample second-brain

A tiny stand-in for the private `second-brain` repo, used by CI and by anyone without it:

```bash
SECOND_BRAIN_DIR=fixtures/second-brain npm run dev
```

Public files (one per kind, plus a superseded ADR and an Indonesian `lang: id` post) must build; every file containing `PRIVATE-FIXTURE` must never reach `dist/` — CI fails if it does. Only `decisions/` and `knowledge/{blog,engineering}/` are synced.
