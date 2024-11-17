import { Component, ViewChild } from '@angular/core';
import { DropdownComponent } from '../customeUI/Dropdown/Dropdown.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [DropdownComponent],
  template: `
    <app-dropdown #dropdown>
      <div #menuItem (click)="dropdown.selectItem(0)">Item 1</div>
      <div #menuItem (click)="dropdown.selectItem(1)" class="disabled">Item 2 (Disabled)</div>
      <div #menuItem (click)="dropdown.selectItem(2)">Item 3</div>
    </app-dropdown>
    <button (click)="logSelection()">Log Selected Item</button>
  `
})
export class TestComponent {
  @ViewChild('dropdown') dropdown!: DropdownComponent;

  logSelection() {
    console.log('Selected Index:', this.dropdown.selectedIndex);
  }
}
