/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { AppRoutes } from './presentation';
import { ApiRestService } from './services/api';
import { MongoDBService } from './services/mongodb';

(() => {
  main();
})();

async function main() {
  // Connect to MongoDB
  await new MongoDBService({
    protocol: 'mongodb',
    host: process.env.MONGODB_HOST || 'localhost',
    port: Number(process.env.MONGODB_PORT) || 27017,
    user: process.env.MONGODB_USER || 'root',
    password: process.env.MONGODB_PASSWORD || 'example',
    databaseName: process.env.MONGODB_DATABASE || 'discord',
  }).connect();

  // Start the server
  new ApiRestService({
    port: Number(process.env.PORT) || 3333,
    routes: AppRoutes.routes,
  }).start();
}
