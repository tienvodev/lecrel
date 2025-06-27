# 🛠 Git Workflow & Branch Strategy for Lecrel

This document outlines the Git workflow used in **Lecrel**, a fullstack Next.js SaaS project. It ensures maintainable code, clean history, and smooth collaboration.

---

## 🔱 Branch Strategy

| Branch      | Purpose                                         |
| ----------- | ----------------------------------------------- |
| `main`      | Production-ready code. Auto-deployed by Vercel. |
| `dev`       | Integration branch for completed features.      |
| `feature/*` | Feature-specific development branches.          |
| `hotfix/*`  | Emergency fixes branched off `main`.            |

---

## 🧱 Workflow Steps

### 1. Start a new feature

```bash
git checkout dev
git pull
git checkout -b feature/your-feature-name
```

### 2. Commit your changes

Use [Conventional Commits](https://www.conventionalcommits.org/) to format messages:

```
feat(auth): add email OTP verification
fix(dashboard): resolve novel list flicker
```

### 3. Push and open PR

```bash
git push -u origin feature/your-feature-name
```

- Open a pull request to `dev`
- Clearly describe what was done and why

### 4. Merge to `dev`

- Review and test thoroughly
- Only merge after approval or self-review if solo

### 5. Deploy to production

```bash
git checkout main
git pull
git merge dev
git tag -a vX.X.X -m "Release description"
git push origin main --tags
```

- `main` will trigger a Vercel deployment

---

## ✅ Commit Message Format

```
type(scope): description
```

### Common Types

| Type       | Purpose                                  |
| ---------- | ---------------------------------------- |
| `feat`     | New feature                              |
| `fix`      | Bug fix                                  |
| `refactor` | Code restructure without behavior change |
| `chore`    | Maintenance work (deps, config, etc.)    |
| `docs`     | Documentation updates                    |
| `style`    | Code formatting (no logic change)        |
| `test`     | Tests or test-related setup              |

### Examples

```bash
git commit -m "feat(novel): add lock preview logic"
git commit -m "fix(auth): resend OTP on login"
```

---

## 🔐 Security and Cleanliness

- Use `.env.example` to share expected variables
- Add `.env.local`, `.vercel`, `node_modules`, `.next` to `.gitignore`
- Do not commit secrets or generated files

---

## 📁 Folder Location

This file should be placed at:

```txt
docs/git-workflow.md
```

---
