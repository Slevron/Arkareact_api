import {UsersController} from '../controllers/UsersController';
import {IRouter} from './interface';

export const routerConfig: IRouter[] = [
    {
        controller: new UsersController(),
        prefix: 'users',
    },
];
