import { Component, computed, signal } from "@angular/core";
import { Cat } from "./cat";
import { CatCard } from "./cat-card";
import { LikeButton } from "./like-button";

@Component({
  selector: "app-root",
  imports: [CatCard, LikeButton],
  template: `
    <app-like-button />
    <h1>{{ availableCount() }} cats available</h1>
    <ul>
      @for (cat of cats(); track cat.id) {
        <app-cat-card [cat]="cat" (adopt)="adopt($event)" />
      }
    </ul>
  `,
})
export class App {
  protected readonly cats = signal<Cat[]>([
    {
      id: 1,
      name: "Tabby",
      adopted: false,
    },
    {
      id: 2,
      name: "Mochi",
      adopted: false,
    },
  ]);

  protected readonly availableCount = computed(() => {
    return this.cats().filter((cat) => {
      return !cat.adopted;
    }).length;
  });

  protected adopt(id: number): void {
    this.cats.update((cats) => {
      return cats.map((cat) => {
        if (cat.id === id) {
          return {
            ...cat,
            adopted: true,
          };
        }
        return cat;
      });
    });
  }
}
