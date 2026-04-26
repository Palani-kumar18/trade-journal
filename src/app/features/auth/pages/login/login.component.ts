import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,private toastr: ToastrService,public auth: Auth
  ) {}

  ngOnInit(){
    signOut(this.auth).then(() => {
        this.router.navigate(['/login']);
      });
  }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.toastr.success('Success Fully Loged In')
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.toastr.error('Email Password Wrong')
      console.error(error);
      
    }
  }
}
