import app from '../src/app';
import database, { options } from '../src/database';
import { DATABASE_URL } from '../config';

import home from './controllers/home';
import register from './controllers/register';

describe('Backend Integration Tests', () => {

  before(() => {
    return database.connect(DATABASE_URL, options);
  });

  home(app);
  register(app);

  after(() => {
    return database.disconnect();
  })
});
