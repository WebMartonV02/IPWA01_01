import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'Kleiderspenden Registrierung';

  constructor() {}

  ngOnInit(): void 
  {
    sessionStorage.setItem('postleitZahl', '99084');
  }

  public currentYear = (new Date()).getFullYear();
}
