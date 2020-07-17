import Router from 'koa-router';
import {ControllerModel} from '../controllers/ControllerModel';
import {routerConfig} from './config';
import {IRouter} from './interface';

export class Routers {
    private list: Router[] = [];

    constructor() {
        routerConfig.forEach(
            (router: IRouter) => this.list.push(this.createRoute(router)),
        );
    }

    public getRoutes() {
        return this.list;
    }

    private createRoute(args: IRouter): Router {
        const router: Router = new Router({
            prefix: `/${args.prefix}`,
        });
        const controller: ControllerModel = args.controller;

        router
            .get('/', (ctx, next) => {
                controller.get(ctx);
            })
            .post('/', (ctx, next) => {
                controller.post(ctx);
            })
            .put('/:id', (ctx, next) => {
                controller.put(ctx);
            })
            .del('/:id', (ctx, next) => {
                controller.del(ctx);
            })
            .all('/:id', (ctx, next) => {
                controller.all(ctx);
            });

        return router;
    }
}
