import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, switchMap, map, of } from "rxjs";
import { PizzasService } from "src/app/shared/services/pizzas.service";
import { loadPizzaPresets, loadPizzaPresetsFailure, loadPizzaPresetsSuccess } from "./pizzas.actions";

@Injectable({providedIn: 'root'})
export class PizzaEffects{
effectName$ = createEffect(() => {
  return this.actions$.pipe(
      ofType(loadPizzaPresets),
      switchMap(() =>
        this.pizzasService.getPizzaPresets().pipe(
          map(({ pizzas }) => loadPizzaPresetsSuccess({ pizzas })),
          catchError(error => of(loadPizzaPresetsFailure({ error }))))
        ),
  );
});
 constructor(private actions$: Actions, private pizzasService: PizzasService) {}
}