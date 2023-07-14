import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private router:Router){}

  home(){
    this.router.navigate([''])
  }

  works(){
    this.router.navigate(['/works'])
  }
}
