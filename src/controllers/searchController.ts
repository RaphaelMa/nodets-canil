import { Request, Response } from 'express';

import { Pets } from '../models/Pets';
import { createMenuObject } from '../helpers/createMenuObject';
export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.redirect('/');
    return;
  }

  let list = Pets.getFromName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query
  });
};