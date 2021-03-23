import { Component } from '@angular/core';
import { AuthService } from '@ser/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portalconvenios';

  constructor(
    public auth: AuthService
  ){}
}
