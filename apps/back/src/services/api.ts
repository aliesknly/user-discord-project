import express, { Express, RequestHandler, Router } from 'express';
import path from 'path';

interface ApiOptionsInterface {
  port?: number;
  routes: Router;
}

export class ApiRestService {
  public app: Express;
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: ApiOptionsInterface) {
    const { port = 3333, routes } = options;
    this.app = express();
    this.app.use(express.json());
    this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
    this.port = port;
    this.routes = routes;
  }

  public addRoute(route: string, handler: RequestHandler) {
    this.app.use(route, handler);
  }
  public start(): void {
    this.app.use(this.routes);
    this.app
      .listen(this.port, () => {
        console.log(`Listening at http://localhost:${this.port}`);
      })
      .on('error', console.error);
  }
}
