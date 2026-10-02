# Go AI Verification Harness Specification

## Overview
The harness provides a CLI to verify Go code against:
- `gofmt` formatting rules
- `go vet` static analysis
- Unit tests (`go test`)
- Vulnerability scan (`gosec`)
- Custom test harness to detect hallucinations

## Features
- **Command**: `goai-verifier <dir>`
- **Output**: JSON report:
  - `golint`: bool
  - `vet`: bool
  - `test_passed`: bool
  - `vulns`: array
  - `hallucination_detected`: bool
- **Configuration**: YAML file `config.yaml` in project root
- **Dependencies**: `gofmt`, `go vet`, `go test`, `gosec` (already installed)

## Command Flow
```bash
# Install
go install github.com/example/goai-verifier@latest

# Run
goai-verifier ./...
```

## Output Format
```json
{
  "golint": true,
  "vet": true,
  "test_passed": true,
  "vulns": [],
  "hallucination_detected": false
}
```

## Development Checklist
- [ ] Create CLI entrypoint
- [ ] Wire subcommands to Go tools
- [ ] Implement hallucination detection logic
- [ ] Unit tests for reporter
- [ ] CI integration via GitHub Actions

---

## Acceptance Criteria
1. All listed tools run without errors.
2. JSON schema validated.
3. Pipeline passes when added to PR reviews.

End of spec.
