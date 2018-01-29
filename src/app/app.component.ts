import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Databinding</h1>
    <hr>
    <app-databinding></app-databinding>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Geändert';
}
