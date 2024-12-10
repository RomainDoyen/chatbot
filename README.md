# Chatbot

This is a simple chatbot that can answer questions.

## Technologies

- Node.js
- Express.js
- Knex.js
- MySQL
- ReactJS

## API Endpoints

### faqs

- GET /api/faqs - Get all faqs
- GET /api/faqs/:id - Get a faq by id
- POST /api/faqs - Create a faq
- PUT /api/faqs/:id - Update a faq
- DELETE /api/faqs/:id - Delete a faq

### requests

- GET /api/requests - Get all requests
- GET /api/requests/:id - Get a request by id
- POST /api/requests - Create a request
- PUT /api/requests/:id - Update a request
- DELETE /api/requests/:id - Delete a request

## Backend

### create .env file

```bash
cp .env.example .env
```

```bash
DB_HOST=<host>
DB_USER=<user>
DB_PASSWORD=<password>
DB_NAME=<database>
```

### Install dependencies

```bash
yarn

npm install -g knex
```

### Run migrations

```bash
knex migrate:latest
```

### Run seeds

```bash
knex seed:run
```

### Run server

```bash
yarn dev
```

## Frontend

### Install dependencies

```bash
yarn
```

### Run server

```bash
yarn dev
```