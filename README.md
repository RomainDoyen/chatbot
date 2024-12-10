# Chatbot

This is a simple chatbot that can answer questions.

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