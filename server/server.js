import dotenv from 'dotenv';
dotenv.config();

import { connectDB, importClientsToDB, deleteClientsfromDB } from './data.js';

// I import app inside the function because i want to run dotenv.config() before importing.
const startServer = async () => {
  const { app } = await import('./app.js');
  const DB = process.env.DATABASE_URL.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  const port = process.env.PORT || 3000;

  app.listen(port, async () => {
    await connectDB(DB);

    if (process.argv[2] === '--import-clients') importClientsToDB();
    if (process.argv[2] === '--delete-clients') deleteClientsfromDB();

    console.log(`App listening on ${port}...`);
  });
};

startServer();
