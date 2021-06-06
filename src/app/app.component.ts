import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delivery';
}

export const GlobalVariables = Object.freeze({
  BASE_API_URL: 'http://localhost:8080',
  //... more of your variables
});
