/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { AppRoutes } from './presentation';
import { ApiRestService } from './services/api';
import { MongoDBService } from './services/mongodb';

const api = new ApiRestService({
  port:  Number(process.env.PORT )|| 3333,
  routes: AppRoutes.routes,
});



api.addRoute('/test', (req, res) => {
  res.send({ message: 'Welcome to back!' });
});

MongoDBService()

api.start();
