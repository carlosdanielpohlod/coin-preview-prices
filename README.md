# Coin Price View

Project created to practice Vite and Vitest. It is composed of a dummy API which returns random values for Bitcoin (BTC) as:

## API Endpoint

### GET `localhost:3001/prices`

```json
{
  "coin": "BTC",
  "prices": [10, 20],
  "years": [2010, 2011]
}
```

## Frontend

A simple Vite project which renders these values in a chart.

## Running the Dummy Server

To run the dummy server, execute:

```bash
node dev/api/server.js
```

