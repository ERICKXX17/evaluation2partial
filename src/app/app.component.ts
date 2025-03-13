import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./pages/menu/menu.component";
import { LibroComponent } from "./pages/libro/libro.component";

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evaluacion2parcial';
}
