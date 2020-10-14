import { Request, Response } from 'express'; 

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

class OrphanagesController {
 async store(request: Request, response: Response) {
  const { 
    name,
    latitude,
    longitude,
    about,
    instructions, 
    opening_hours,
    open_on_weekends
  }  = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions, 
    opening_hours,
    open_on_weekends
  });

  await orphanagesRepository.save(orphanage);

  return response.status(201).json(orphanage);
 }

 async index(request: Request, response: Response) {
  const orphanagesRepository = getRepository(Orphanage);

  const orphanages = await orphanagesRepository.find();

  return response.status(200).json(orphanages);
 }
}

export default new OrphanagesController();
