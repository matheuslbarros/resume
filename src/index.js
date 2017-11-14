import app from './app';
import database, { options } from './database';
import { PORT, DATABASE_URL } from '../config';

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

database
  .connect(DATABASE_URL, options)
  .then(() => {
    console.log('Database connected');
  }).catch((error) => {
    console.log('Database error', error.message);
    process.exit(1);
  });
