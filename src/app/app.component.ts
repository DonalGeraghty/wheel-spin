import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WheelComponent } from "./wheel/wheel.component";
import { NamesComponent } from "./names/names.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WheelComponent, NamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wheel-spin';
}
