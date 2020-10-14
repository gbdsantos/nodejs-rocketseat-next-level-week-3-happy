import {Router} from 'express'; 

import multer from 'multer';
import uploadConfig from './config/upload';

import OrphanagesController from "./controller/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.store);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;
