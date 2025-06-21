# GitHub Actions

This directory contains GitHub Actions workflows for automated testing and quality checks.

## Workflows

### Quality Checks (`quality-checks.yml`)

**Triggers:**
- Push to **any branch** (only when code files change)
- Pull requests to `main` or `develop` branches (only when code files change)

**File Changes That Trigger CI:**
- `**/*.ts` - TypeScript files
- `**/*.js` - JavaScript files
- `package.json` - Dependencies
- `package-lock.json` - Lock file
- `tsconfig.json` - TypeScript config
- `.eslintrc.js` - ESLint config
- `jest.config.js` - Jest config

**What it does:**
1. ✅ **TypeScript Type Checking** - Validates all TypeScript types
2. ✅ **ESLint Code Quality** - Checks code quality and style
3. ✅ **Jest Unit Tests** - Runs all unit tests

**Node.js Version:** 18 (matches `.nvmrc`)

## Status Badge

Add this to your README.md to show CI status:

```markdown
![Quality Checks](https://github.com/trungleviet-agilityio/nodejs-training/workflows/Quality%20Checks/badge.svg)
``` 