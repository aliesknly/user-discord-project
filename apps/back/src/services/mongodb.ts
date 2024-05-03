import mongoose from 'mongoose';

const URI = `mongodb://root:example@localhost:27017`;

export async function MongoDBService() {
  await mongoose
    .connect(URI, {
      authSource: 'admin'
    })
    .then((res) => {
      console.log('✅ MongoDB connected 🔌📡🚀...');
    })
    .catch((err) => {
      console.group('❌ MongoDB connection error');
      console.log(err);
      console.groupEnd();
    });
}