import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {
  
  public lastName: string = '';
  public name: string = '';

  public year: number = 2024;

  actionBtn1 () {
    this.name = 'Mariana';
    this.lastName = 'Carriao';
  }

  increaseYear() {
    this.year ++;
    // equivalent to this.year = this.year +1';
  }

  decreaseYear() {
    this.year --;
    // equivalent to this.year = this.year -1';
  }
}
