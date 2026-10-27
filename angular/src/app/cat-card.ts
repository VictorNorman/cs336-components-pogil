import { Component, input, output } from "@angular/core";
import { Cat } from "./cat";

@Component({
  selector: "app-cat-card",
  template: `
    <li>
      {{ cat().name }}
      @if (cat().adopted) {
        <span>(adopted)</span>
      }
      <button (click)="adopt.emit(cat().id)">Adopt</button>
    </li>
  `,
})
export class CatCard {
  readonly cat = input.required<Cat>();
  readonly adopt = output<number>();
}
