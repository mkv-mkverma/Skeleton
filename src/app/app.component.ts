/**
 * A component controls a patch of screen called a view.
 *
 * The class interacts with the view through an API of properties and methods.
 */
import { Component } from '@angular/core';

// Declares that a class is a component and provides metadata about the component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
