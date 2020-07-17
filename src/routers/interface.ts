import {ControllerModel} from '../controllers/ControllerModel';

export interface IRouter {
    prefix: string;
    controller: ControllerModel;
}
