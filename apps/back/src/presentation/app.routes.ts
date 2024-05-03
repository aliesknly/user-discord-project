import { Router } from 'express';
import { ModulesRoutes } from './modules.routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api', ModulesRoutes.routes);

    return router;
  }
}
