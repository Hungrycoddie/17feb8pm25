import { Component } from '@angular/core';

import { HeaderComponent} from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { coreUImodule } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


  
export class AppComponent {

}
