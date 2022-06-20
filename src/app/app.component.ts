import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  favBooks = [
    {title: "Humor, Seriously"},
    {title: ":59 Seconds"},
    {title: "The Hero With a Thousand Faces"},
  ];

}
