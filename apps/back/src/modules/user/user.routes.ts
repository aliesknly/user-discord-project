import { Router } from 'express';
import { UserController } from './user.controller';
import { UserDatasourceImpl, UserRepositoryImpl } from './infrastructure';

export class UserRoutes {
  static get routes(): Router {
    const route = Router();

    const userDatasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl(userDatasource);
    const controller = new UserController(userRepository);

    route.get('/list', (req, resp) => {
      resp.json({ message: 'List of users' });
    });

    route.post('/create', controller.createUser);

    route.get('/:email', (req, resp) => {
      resp.json({ message: 'Get user' });
    });

    route.put('/:email', (req, resp) => {
      resp.json({ message: 'Update user' });
    });

    route.delete('/:email', (req, resp) => {
      resp.json({ message: 'Delete user' });
    });
    return route;
  }
}
