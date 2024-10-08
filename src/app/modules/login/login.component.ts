import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword = false;
  form: FormGroup;
  isLoading: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/usuários']);
    }, 1000);

  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
