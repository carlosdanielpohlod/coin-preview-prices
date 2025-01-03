import express from 'express';
import cors from 'cors';
import { faker } from '@faker-js/faker';

const app = express();
const port = 3001;

app.use(cors());

app.get('/prices', (req, res) => {
  const prices = [];
  const years = [];
  const now = new Date();

  for (let i = 0; i < 10; i++) {
    const date = new Date(now);
    date.setFullYear(now.getFullYear() - i);
    prices.push(faker.finance.amount(30000, 60000, 2));
    years.push(date.getFullYear());
  }

  res.json({
    coin: "BTC",
    prices,
    years
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});