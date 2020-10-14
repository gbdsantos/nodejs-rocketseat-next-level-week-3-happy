import {Router} from 'express'; 

import OrphanagesController from "./controller/OrphanagesController";

const routes = Router();

routes.post('/orphanages', OrphanagesController.store);

export default routes;