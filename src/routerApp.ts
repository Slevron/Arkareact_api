import Router from 'koa-router';
import {Routers} from './routers';

export class RouterApp {
    private readonly router: Router = new Router();
    private routes: Routers = new Routers();

    constructor() {
        this.router.get('/');
        this.routes.getRoutes().forEach((router: Router) => {
            this.router.use(
                router.routes(), router.allowedMethods(),
            );
        });
    }

    public get(): Router {
        return this.router;
    }
}
