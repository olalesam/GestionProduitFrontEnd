import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);

    if (isValidUser) this.router.navigate(['/']);
    //alert('Login ou mot de passe incorrecte!');
    else this.erreur = 1;
  }
}
