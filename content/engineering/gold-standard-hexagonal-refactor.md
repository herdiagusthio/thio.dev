---
title: "Eliminating Primitive Obsession in Hexagonal Architecture"
date: "2026-09-12"
category: "engineering"
status: "published"
tags: ["golang","hexagonal-architecture","domain-driven-design","value-objects"]
summary: "Hardening domain boundaries by replacing raw strings with typed Value Objects, making invalid domain states unrepresentable."
---

## Context
The original Hexagonal Architecture reference implementation suffered from **Primitive Obsession**: the domain layer used raw strings for `Email`, `Username`, and `UserID`, and relied on `error` strings for infrastructure failures. This leaked validation logic into use cases and coupled the domain to GORM error types.

## Solution
Applied a **Gold Standard** refactor across three layers:

### 1. Value Objects (Domain Hardening)
Introduced strong types that make invalid states unrepresentable:
```go
type Email struct { value string }
func NewEmail(s string) (Email, error) { /* RFC5322 validation */ }

type Username struct { value string }
func NewUsername(s string) (Username, error) { /* alphanumeric + length */ }
```

### 2. Error Translation (Infrastructure Decoupling)
Created a translation layer in the repository to convert GORM errors into domain errors:
```go
func (r *UserRepository) translateError(err error) error {
    switch {
    case errors.Is(err, gorm.ErrRecordNotFound):
        return domain.ErrUserNotFound
    case isUniqueConstraint(err):
        return domain.ErrUserAlreadyExists
    default:
        return domain.ErrRepository
    }
}
```

### 3. Verification (100% Coverage)
Implemented table-driven tests with mocks for the business layer:
```go
func TestUserService_Create(t *testing.T) {
    tests := []struct{
        name string
        input CreateUserInput
        mock func(*mocks.UserRepository)
        wantErr error
    }{
        {"valid", validInput, mockSuccess, nil},
        {"invalid_email", invalidEmailInput, nil, domain.ErrInvalidEmail},
        // ... 8 more cases
    }
    for _, tc := range tests { /* run */ }
}
```

## Impact
- **Zero invalid domain objects** can exist at runtime.
- **Infrastructure swapped** (e.g., GORM → sqlx) without touching domain code.
- **Test coverage**: 100% business logic, 0 flaky integration tests.
- **ADR 001** documents the architecture for future maintainers.

## Transferable Pattern
This pattern applies to any system where:
- Domain concepts are currently primitives (string, int, float64)
- Infrastructure errors leak into business logic
- Tests require a running database to verify domain rules
