import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core';
import { LoginModal, PublicService } from '@app/public';
import { ErrorPageComponent } from '@app/public/components/error-page/error-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModal: LoginModal = {} as LoginModal;
  loginForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private router: Router,
    private publicService: PublicService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.bindForm();
  }

  bindForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required])
    });
  }

  goRegistered() {
    this.router.navigate(['public', 'register']);
  }

  get username() { return this.loginForm.controls['username']; }
  get password() { return this.loginForm.controls['password']; }

  login() {

    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.loginModal = { ...this.loginModal, ...this.loginForm.value };
    this.publicService.login(this.loginModal).subscribe(
      response => {
        this.authService.setAuthService(response);
        this.authService.redirectUser();
      },
      error => {
        console.log(error);
      })
  }
}