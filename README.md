# Writeway Platform

Writeway is a modern writing platform designed to help writers create, edit, and organize their stories with the help of AI.

## Getting Started

1. Clone this repository
2. Set up environment variables (copy .env.example to .env in frontend directory and update with your values)
3. Install dependencies
   - Frontend: cd frontend && npm install
   - Backend: cd backend && npm install
4. Start the development servers
   - Frontend: cd frontend && npm run dev
   - Backend: cd backend && npm run dev

## Environment Variables

The application uses environment variables for configuration. See .env.example files in each directory for required variables. Never commit .env files to the repository.

## Running Tests

To run tests:

- Unit and integration tests: npm test
- End-to-end tests: npm run test:e2e
- Performance tests: npm run test:performance
