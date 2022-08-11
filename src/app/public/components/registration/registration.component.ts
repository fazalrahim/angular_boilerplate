import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core';
import { RegisterModal, PublicService } from '@app/public';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationModal: RegisterModal = {} as RegisterModal;
  registrationForm!: FormGroup;
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
    this.registrationForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required])
    });
  }

  goLogin() {
    this.router.navigate(['public', 'login']);
  }

  get fullName() { return this.registrationForm.controls['fullName']; }
  get username() { return this.registrationForm.controls['username']; }
  get password() { return this.registrationForm.controls['password']; }

  register() {

    this.isSubmitted = true;
    if (this.registrationForm.invalid) return;
    this.registrationModal = {...this.registrationModal, ...this.registrationForm.value};
    this.publicService.login(this.registrationModal).subscribe(
      response => {
        console.log(response);
        this.authService.setAuthService(response);
        this.authService.redirectUser();
      },
      error => {
        console.log(error);
      })
  }

}
