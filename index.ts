import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: `./${process.env.ENV}.env` });

const app: Express = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

server.keepAliveTimeout = 65000;
