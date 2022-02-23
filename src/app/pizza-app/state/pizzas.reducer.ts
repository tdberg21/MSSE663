// import { state } from "@angular/animations";
import { Action, createFeature, createReducer, on } from "@ngrx/store";
import { PizzaEntity } from "api/lib/api-interfaces";
import { loadPizzaPresets, loadPizzaPresetsFailure, loadPizzaPresetsSuccess } from ".";

export interface PizzasState {
  pizzas: PizzaEntity[];
  loading: boolean;
}

const initialState: PizzasState = {
  pizzas: [],
  loading: false,
};

const pizzasFeature = createFeature({
  name: 'pizzas',
  reducer: createReducer(
    initialState,
    on(loadPizzaPresets, (state) => ({
      ...state,
      loading: true,
    })),
    on(loadPizzaPresetsSuccess, (state, { pizzas }) => ({
      ...state,
      pizzas,
    })),
  )
});

export const {
  name,
  reducer,
  selectPizzas,
  selectPizzasState,
  selectLoading
} = pizzasFeature;