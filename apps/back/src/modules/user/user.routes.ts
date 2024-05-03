import { Router } from 'express';

export class UserRoutes {
  static get routes(): Router {
    const route = Router();

    route.get('/list', (req, resp) => {
      resp.json({ message: 'List of users' });
    });

    route.post('/create', (req, resp) => {
      resp.json({ message: 'Create user' });
    })

    route.get('/:email', (req, resp) => {
        resp.json({ message: 'Get user' });
    })

    route.put('/:email', (req, resp) => {
        resp.json({ message: 'Update user' });
    })

    route.delete('/:email', (req, resp) => {
        resp.json({ message: 'Delete user' });
    })
    return route;
  }
}
