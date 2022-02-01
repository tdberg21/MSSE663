import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { PizzaService } from './src/pizzas.service';

//Setup
const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes

const pizzaService = new PizzaService();

app.get('/api/pizzas', (req: any, res: any) => {
  const pizzas = pizzaService.getCreatedPizzas();
  res.send({
    msg: 'Found Pizzas',
    pizzas
  })
});

app.get('/api/pizzas/presets', (req: any, res: any) => {
  const pizzas = pizzaService.getPizzaPresets();
  res.send({
    msg: 'Found Pizza presets',
    pizzas
  })
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});