import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 3001;

app.get('/price', (req, res) => {
  const prices = [];
  const now = new Date();

  for (let i = 0; i < 10; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    prices.push({
      timestamp: date.toISOString(),
      value: faker.finance.amount(30000, 60000, 2)
    });
  }

  res.json({
    coin: "BTC",
    prices
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});