import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';

export class ModulesRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/user', UserRoutes.routes);
    return router;
  }
}
