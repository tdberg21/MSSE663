import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, shareReplay, tap } from "rxjs";
import { PizzaResponse, PizzasService } from "./pizzas.service";
import { Pizza, PizzaEntity } from "api/lib/api-interfaces";

@Injectable({providedIn: 'root'})
export class PizzasStateService {
  private readonly pizzas = new BehaviorSubject<PizzaEntity[]>([]);
  readonly pizzas$ = this.pizzas.asObservable();

  get pizzaValues(): PizzaEntity[] {
    return this.pizzas.getValue();
  }

  constructor(private pizzasService: PizzasService) {
    this.loadPizzaPreset().subscribe();
  }

  loadPizzaPreset(): Observable<PizzaEntity[]> {
    return this.pizzasService
      .getPizzaPresets()
      .pipe(map((data: PizzaResponse) => data.pizzas),
        tap(pizzas => {
          this.pizzas.next(pizzas);
        }),
        shareReplay(1)
        );
  }

  createPizzas(pizzas: Pizza[]) {
    const newPizzas = pizzas.map((pizza) => ({
      ...pizza,
      id:'1234',
    }))
    this.pizzas.next([...this.pizzaValues, ...newPizzas]);
  }
}