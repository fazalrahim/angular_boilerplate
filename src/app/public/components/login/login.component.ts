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
    capsOn!: boolean;

    constructor(
        private router: Router,
        private publicService: PublicService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.bindForm();
        this.getCoinPrice();
    }

    bindForm() {
        this.loginForm = new FormGroup({
            username: new FormControl('fazal', [Validators.required, Validators.minLength(4)]),
            password: new FormControl('Admin@123', [Validators.required])
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
            (response: boolean) => {
                if (!response) return alert('username / password is incorrect');
                this.authService.setAuthService(response);
                this.authService.redirectUser();
            },
            (error: any) => {
                console.log(error);
            });
    }

    /**
     * Get calling for testing
     */

    getCoinPrice() {
        this.publicService.getCoinInfo().subscribe(
            response => {
                console.log(response);
            });
    }
}