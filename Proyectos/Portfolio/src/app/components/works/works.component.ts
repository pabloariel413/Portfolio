import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  
  constructor(private router:Router){}

  about(){
    this.router.navigate(['/about'])
  }

  contact(){
    this.router.navigate(['/contact'])
  }
}
