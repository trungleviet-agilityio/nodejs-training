#!/bin/bash

# Node.js Training Repository - Cleanup Script
# This script helps manage disk space by cleaning unnecessary files

echo "🧹 Starting cleanup process..."

# Function to print colored output
print_status() {
    echo -e "\033[1;34m$1\033[0m"
}

print_success() {
    echo -e "\033[1;32m✅ $1\033[0m"
}

print_warning() {
    echo -e "\033[1;33m⚠️  $1\033[0m"
}

# Clean npm cache
print_status "Cleaning npm cache..."
npm cache clean --force
print_success "npm cache cleaned"

# Remove node_modules from all directories
print_status "Removing node_modules directories..."
find . -name "node_modules" -type d -prune -exec rm -rf '{}' + 2>/dev/null || true
print_success "node_modules directories removed"

# Remove package-lock.json files
print_status "Removing package-lock.json files..."
find . -name "package-lock.json" -type f -delete
print_success "package-lock.json files removed"

# Remove dist and build directories
print_status "Removing build directories..."
find . -name "dist" -type d -prune -exec rm -rf '{}' + 2>/dev/null || true
find . -name "build" -type d -prune -exec rm -rf '{}' + 2>/dev/null || true
print_success "build directories removed"

# Remove TypeScript build info
print_status "Removing TypeScript build info..."
find . -name "*.tsbuildinfo" -type f -delete
print_success "TypeScript build info removed"

# Remove coverage directories
print_status "Removing coverage directories..."
find . -name "coverage" -type d -prune -exec rm -rf '{}' + 2>/dev/null || true
print_success "coverage directories removed"

# Remove log files
print_status "Removing log files..."
find . -name "*.log" -type f -delete
print_success "log files removed"

# Show disk usage before and after
print_status "Current disk usage:"
du -sh . 2>/dev/null || echo "Could not calculate disk usage"

print_success "Cleanup completed!"
print_warning "To reinstall dependencies, run: npm install"
print_warning "To install dependencies in TypeScript learning directory, run: cd typescripts-learning && npm install" 