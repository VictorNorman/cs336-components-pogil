import { Component, signal } from "@angular/core";

@Component({
  selector: "app-like-button",
  template: `<button (click)="addLike()">Like ({{ likes() }})</button>`,
})
export class LikeButton {
  protected readonly likes = signal(0);

  protected addLike(): void {
    this.likes.update((n) => {
      return n + 1;
    });
  }
}
