import { Handler } from 'express';
import { PizzaEntity } from '../lib/api-interfaces';
import { Pizzas } from './pizzas.model';

export class PizzaService {
  getPizzaPresets: Handler = (req, res) => {
    Pizzas.find({}, (err: any, data: PizzaEntity[]) => {
      if (err) {
        return res.send(err);
      }
      res.send({
        msg: 'Found pizza presets',
        pizzas: data,
      });
    });
  };

  getPizzaPreset: Handler = (req, res) => {
    Pizzas.findById(req.params.id, (err: any, data: PizzaEntity) => {
      if (err) {
        return res.send(err);
      }
      res.send({
        msg: 'Found pizza preset',
        pizza: data,
      });
    });
  };

  createPizza: Handler = (req, res) => {
    const { pizzas } = req.body;
    const newPizzas = new Pizzas(pizzas);

    newPizzas.save((err: any, data: any) => {
      if (err) {
        return res.send(err);
      }
      res.send({
        msg: 'Created pizzas',
        pizzas: [data],
      });
    });
  };
}