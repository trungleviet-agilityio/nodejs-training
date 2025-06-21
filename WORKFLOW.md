# Git Workflow for Node.js Training

This document explains the proper Git workflow for this learning repository.

## 🌿 Branch Strategy

### Branch Structure
```
main (production)
├── develop (integration)
    └── learning/typescripts (feature/learning)
```

### Branch Purposes

#### `learning/typescripts`
- **Purpose**: Active development and learning for TypeScript
- **Work**: 
  - Create new TypeScript examples and exercises
  - Write tests for learning materials
  - Experiment with TypeScript features
  - Document learning progress
- **Naming**: `learning/typescripts` (current), future: `learning/nodejs-core`, `learning/express`, etc.

#### `develop`
- **Purpose**: Integration branch for completed learning modules
- **Work**:
  - Merge completed learning topics from feature branches
  - Integration testing of learning materials
  - Prepare for main branch deployment
- **Source**: Merged from `learning/*` branches

#### `main`
- **Purpose**: Production-ready documentation and stable learning materials
- **Work**:
  - Final, reviewed learning materials
  - Complete documentation
  - Release versions of learning content
- **Source**: Merged from `develop` branch

## 🔄 Workflow Process

### 1. Starting New Learning Topic
```bash
# Create new learning branch from develop
git checkout develop
git pull origin develop
git checkout -b learning/new-topic

# Work on your learning materials
# ... create examples, write tests, document concepts ...

# Commit your changes
git add .
git commit -m "Add new learning topic: [Topic Name]"

# Push to remote
git push -u origin learning/new-topic
```

### 2. Completing Learning Topic
```bash
# Ensure all tests pass
npm test

# Update documentation
# ... update README, add progress tracking ...

# Final commit
git add .
git commit -m "Complete learning topic: [Topic Name]"

# Push final changes
git push origin learning/new-topic
```

### 3. Merging to Develop
```bash
# Switch to develop branch
git checkout develop
git pull origin develop

# Merge learning branch
git merge learning/new-topic

# Resolve any conflicts
# ... resolve conflicts if any ...

# Push to develop
git push origin develop
```

### 4. Merging to Main (Release)
```bash
# Switch to main branch
git checkout main
git pull origin main

# Merge from develop
git merge develop

# Create a release tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push to main and tags
git push origin main
git push origin --tags
```

## 📝 Commit Message Convention

Use descriptive commit messages following this pattern:

```
type(scope): description

Examples:
feat(typescript): add basic types examples
test(interfaces): add interface testing suite
docs(readme): update learning progress
fix(basics): correct type annotation examples
refactor(classes): improve class inheritance examples
```

### Commit Types
- `feat`: New feature or learning material
- `fix`: Bug fix in examples or tests
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code improvements
- `chore`: Maintenance tasks

## 🧪 Testing Workflow

### Before Committing
```bash
# Run TypeScript compilation check
npm run type-check

# Run linting
npm run lint

# Run tests
npm test

# Build the project
npm run build
```

### Continuous Integration
- All branches should have passing tests
- TypeScript compilation should succeed
- Linting should pass without errors
- Documentation should be up to date

## 🎯 Learning Progress Tracking

### Progress Checklist
- [ ] **Theory**: Understand the concept
- [ ] **Examples**: Create working examples
- [ ] **Tests**: Write comprehensive tests
- [ ] **Documentation**: Document the learning
- [ ] **Integration**: Merge to develop
- [ ] **Review**: Code review and improvements

### Learning Topics Status
- [x] **TypeScript Basics** - In Progress (`learning/typescripts`)
- [ ] **TypeScript Interfaces** - Planned
- [ ] **TypeScript Classes** - Planned
- [ ] **TypeScript Generics** - Planned
- [ ] **TypeScript Modules** - Planned
- [ ] **TypeScript Advanced** - Planned

## 🚀 Quick Commands

### Daily Workflow
```bash
# Start working on TypeScript learning
git checkout learning/typescripts
git pull origin learning/typescripts

# After making changes
npm test
npm run lint
git add .
git commit -m "feat(typescript): [description]"
git push origin learning/typescripts
```

### Cleanup Commands
```bash
# Clean up disk space
./scripts/cleanup.sh

# Install dependencies
npm install

# Install TypeScript learning dependencies
cd typescripts-learning && npm install
```

## 📚 Resources

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Remember**: Always work in `learning/typescripts` for TypeScript learning, merge to `develop` when topics are complete, and merge to `main` for releases. 