
# Basic NodeJS MITSO

## Prerequisites

- Node.js (v18 or later)
- A Replit account

## Setup

1. Fork this Repl
2. Create a new PostgreSQL database from the Database tab
3. The database connection string will be automatically added to your environment variables

## Running the Application

1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

The server will automatically restart on changes thanks to nodemon.

## Environment Variables

The following environment variables are required:
- `DATABASE_URL`: PostgreSQL connection string (automatically set by Replit)
- `PORT`: Application port (defaults to 4000)
- `NODE_ENV`: Environment name (defaults to development)
- `JWT_SECRET_KEY`: Secret key for JWT tokens

## Project Structure

```
src/
├── common/         # Common utilities and config
├── resources/      # API resources
│   ├── abiturient/
│   ├── exam/
│   └── teacher/
└── app.js         # Express application setup
```

## Logging

Logs are stored in the `logs` directory:
- `error.log`: Error-level logs
- `combined.log`: All logs

## Database

The application uses PostgreSQL provided by Replit. The database connection is automatically managed with connection pooling for better performance and reliability.
