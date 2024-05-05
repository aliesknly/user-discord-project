/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { envs } from './config/envs';
import { AppRoutes } from './presentation';
import { ApiRestService } from './services/api';
import { MongoDBService } from './services/mongodb';

(() => {
  main();
})();

async function main() {
  // Connect to MongoDB
  await new MongoDBService({
    protocol: envs.DB_PROTOCOL,
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    user: envs.DB_USER,
    password: envs.DB_PASSWORD,
    databaseName: envs.DB_NAME,
  }).connect();

  // Start the server
  new ApiRestService({
    port: envs.API_PORT,
    routes: AppRoutes.routes,
  }).start();
}
