import { Component } from '@angular/core';

import persona from 'src/assets/json/MOCK_DATA.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectPractice';

  Persona: any = persona;
}
