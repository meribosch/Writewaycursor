#!/bin/bash
set -e

# Skip Cypress installation
export CYPRESS_INSTALL_BINARY=0

# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install --legacy-peer-deps
npm run build

cd ..
echo "Build completed successfully!"
