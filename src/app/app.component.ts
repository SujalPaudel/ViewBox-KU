import { Component } from '@angular/core';

// where the navigation ressides, this will be accessed by every child component

@Component({

  selector: 'app-root',
  templateUrl:  'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Freelance Bootcamp Dashboard';
}


// components passed from router is going to be passed in <router-outlet>