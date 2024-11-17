import { Component, QueryList, ViewChildren } from '@angular/core';
import { CardComponent } from '../customeUI/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CardComponent, CommonModule],
  template: `
   <button (click)="toggleAll()">Toggle All</button>
  <div style="display: flex;justify-content: center">
  <app-card *ngFor="let card of cardsContent">Card Content</app-card>
  </div>
`
})
export class TestComponent {

  cardsContent = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

  @ViewChildren(CardComponent) cards!: QueryList<CardComponent>;

  toggleAll() {
    this.cards.forEach(card => card.toggle());
  }
}
