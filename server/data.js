import mongoose from 'mongoose';

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

// // ADD Data Tours
// const importToursToDB = async () => {
//   try {
//     await Tour.create(tours);
//     console.log('Data saved successfully!!');
//     process.exit();
//   } catch (err) {
//     console.error('importation DB failed: ', err.message);
//   }
// };

// // DELETE Data Tours
// const deleteToursfromDB = async () => {
//   try {
//     await Tour.deleteMany();
//     console.log('Data deleted successfully!!');
//     process.exit();
//   } catch (err) {
//     console.error('Delete Data failed: ', err.message);
//   }
// };

export { connectDB };
