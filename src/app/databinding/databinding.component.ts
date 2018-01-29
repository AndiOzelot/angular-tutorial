import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  aString = "Ich bin ein String";
  aNumber = 100;

  constructor() {
    setTimeout(() => {
      this.aNumber += 200;
    }, 3000);
  }
}
