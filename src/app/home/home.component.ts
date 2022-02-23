import { Component } from "@angular/core";
import { PizzasService } from "../shared/services/pizzas.service";
import { PizzasStateService } from "../shared/services/pizzas-state.service";
import { ActivatedRoute } from "@angular/router";
import { pluck } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  readonly pizzas$ = this.activatedRoute.data.pipe(pluck('pizzas'));

  constructor(private activatedRoute: ActivatedRoute) {};
}
