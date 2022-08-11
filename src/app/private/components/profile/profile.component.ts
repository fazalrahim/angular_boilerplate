import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDashboard() { 
    return this.router.navigate(['private', 'dashboard']);
  }
  goGrid() {
    return this.router.navigate(['private', 'grid']);
   }
  goForm() {
    return this.router.navigate(['private', 'form']);
   }

}
