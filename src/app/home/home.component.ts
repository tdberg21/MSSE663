import { Component } from "@angular/core";
import { PizzasService } from "../shared/services/pizzas.service";
import { PizzasStateService } from "../shared/services/pizzas-state.service";
import { ActivatedRoute } from "@angular/router";
import { pluck, map } from "rxjs";
import { Store } from "@ngrx/store";
import { PizzasState, selectPizzas, selectPizzasViewModel } from "../pizza-app/state";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  readonly pizzas$ = this.store.select(selectPizzas);

  // constructor(private activatedRoute: ActivatedRoute) {};
  constructor(private store: Store<PizzasState>) {};
}
