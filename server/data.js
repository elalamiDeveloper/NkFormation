import fs from 'fs';
import mongoose from 'mongoose';
import Client from './models/Client.js';

const clients = JSON.parse(
  fs.readFileSync('./data/json/opcommerce-clean.json_2.json', 'utf-8')
);

console.log(clients);

// Connect to DB
const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(url);
    console.log('NATOURS DATA connected successfully...');
  } catch (err) {
    console.log('Connection DB failed => ', err.message);
  }
};

// ADD Data Clients
const importClientsToDB = async () => {
  try {
    await Client.create(clients);
    console.log('Data saved successfully!!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE Data Tours
const deleteClientsfromDB = async () => {
  try {
    await Client.deleteMany();
    console.log('Data deleted successfully!!');
  } catch (err) {
    console.error('Delete Client failed!!');
  }
  process.exit();
};

export { connectDB, importClientsToDB, deleteClientsfromDB };
