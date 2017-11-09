import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';
import notFoundHandler from './middlewares/notFoundHandler';
import errorHandler from './middlewares/errorHandler';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

routes(router);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;