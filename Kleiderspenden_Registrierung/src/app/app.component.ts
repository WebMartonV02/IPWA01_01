import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

    let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#fdf8ed"
           },
           button: {
             background: "#7E7E7E",
             text: "#ffffff"
           }
         },
         theme: "classic",
         content: {
           message: "A weboldalon a jobb szolgáltatási minőség érdekében sütiket használunk. A sütiket, a böngészőjében is letilthatja.",
           dismiss: "Elfogadom",
           link: "",
           href: "/dataprivacy" 
         }
       });
  }

  

  public currentYear = (new Date()).getFullYear();
}
