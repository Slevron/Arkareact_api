import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import jwt from 'koa-jwt';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {RouterApp} from './routerApp';

createConnection().then(async (connection) => {
    const app = new Koa();
    app.use(jwt({ secret: 'shared-secret' }).unless({ path: [/^\/login/] }));
    app.use(bodyParser());
    const routerApp = new RouterApp().get();
    app.use(routerApp.routes());
    app.use(routerApp.allowedMethods());
    app.listen(3000);

}).catch((error) => console.log(error));
