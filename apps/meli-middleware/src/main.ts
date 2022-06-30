import { controllerRouter } from './app/decorators/controllers/controller.decorator';
import * as express from 'express';
import { BASE_URL } from './app/config/base-url';
import './app/controllers/products-controller'

const app = express();

app.get(BASE_URL, (req, res) => {
  res.send({ message: 'Welcome to meli-middleware!' });
});

app.use(controllerRouter)


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
