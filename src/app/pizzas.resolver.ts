import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { PizzaEntity } from "api/lib/api-interfaces";
import { BehaviorSubject, filter, map, Observable, take, tap } from "rxjs";
import { PizzasStateService } from "./shared/services/pizzas-state.service";

@Injectable({providedIn: 'root'})
export class PizzasResolver implements Resolve<PizzaEntity[]> {
  resolve(route: ActivatedRouteSnapshot): Observable<PizzaEntity[]> {
    return this.pizzasStateService.pizzas$.pipe(filter(pizzas => !!pizzas.length), take(1));
  }

  constructor(private pizzasStateService: PizzasStateService) {};
  
}