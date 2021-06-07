import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delivery';
  loading: boolean = false;
  errorMessage = '';
}

export const GlobalVariables = Object.freeze({
  BASE_API_URL: 'http://localhost:8080',
  //... more of your variables
});
