# Node.js Training Repository

This repository is dedicated to learning Node.js and related technologies. The project is organized into different branches for different learning paths and topics.

## 🏗️ Repository Structure

### Branches
- **`main`** - Main branch with project overview and documentation
- **`develop`** - Development branch for active development work
- **`learning/typescripts`** - TypeScript learning materials and exercises

### Learning Paths
- **TypeScript Fundamentals** - Basic to advanced TypeScript concepts
- **Node.js Core** - Node.js runtime, modules, and APIs
- **Express.js** - Web framework for Node.js
- **Database Integration** - Working with databases in Node.js
- **Testing** - Unit and integration testing
- **Deployment** - Production deployment strategies

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Git
- [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) for managing Node.js versions per project

### Node.js Version Management (like Python's pyenv)
This project uses [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions per project. The required version is specified in the `.nvmrc` file.

```bash
# Install nvm (if not already)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install the required Node.js version
nvm install

# Use the required Node.js version
nvm use
```

You can add `nvm use` to your shell startup or run it each time you start working on the project.

### Installation
```bash
# Clone the repository
git clone git@github.com:trungleviet-agilityio/nodejs-training.git

# Navigate to the project
cd nodejs-training

# Activate the correct Node.js version
nvm use

# Install dependencies (when available)
npm install
```

## 📚 Learning Modules

### TypeScript Learning (`learning/typescripts` branch)
- Basic TypeScript syntax and types
- Interfaces and classes
- Generics and advanced types
- Module system
- Configuration and tooling

### Node.js Core (Future modules)
- Event-driven programming
- Streams and buffers
- File system operations
- HTTP module
- Process and child processes

## 🛠️ Development Setup

### Environment Management
To save disk space and manage packages efficiently:

1. **Use package managers wisely**: Install only necessary dependencies
2. **Clean up regularly**: Remove unused packages and clear caches
3. **Use workspaces**: Organize related projects in monorepo structure
4. **Docker containers**: Use containers for isolated development environments

### Pre-commit Hooks
This project uses [Husky](https://typicode.github.io/husky/) to run pre-commit checks automatically:

```bash
# Pre-commit checks run automatically on every commit:
# - TypeScript type checking
# - ESLint code linting
# - Jest unit tests

# To run checks manually:
npm run pre-commit

# To skip pre-commit hooks (use with caution):
git commit --no-verify -m "your message"
```

### Package Management Commands
```bash
# Clean npm cache
npm cache clean --force

# Remove unused packages
npm prune

# Check for outdated packages
npm outdated

# Update packages selectively
npm update <package-name>
```

### 🧹 Disk Space Management
For laptops with limited storage, use the cleanup script:

```bash
# Run the cleanup script to free up disk space
./scripts/cleanup.sh

# This will remove:
# - node_modules directories
# - package-lock.json files
# - build artifacts (dist, build)
# - npm cache
# - coverage reports
# - log files
```

## 📝 Contributing

1. Create a feature branch from the appropriate learning branch
2. Make your changes and commit with descriptive messages
3. Push your branch and create a pull request
4. Follow the coding standards and documentation guidelines

## 🎯 Learning Goals

- Master TypeScript fundamentals and advanced features
- Understand Node.js runtime and core modules
- Build scalable web applications with Express.js
- Implement proper testing strategies
- Deploy applications to production environments

## 📖 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 License

This project is for educational purposes. Feel free to use and modify for your own learning journey.

---

**Happy Learning! 🎉**
