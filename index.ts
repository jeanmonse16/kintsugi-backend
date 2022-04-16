import express, { Express, Request, Response } from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: `./${process.env.ENV}.env` }));
console.log(process.env.ENV);

const app: Express = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});