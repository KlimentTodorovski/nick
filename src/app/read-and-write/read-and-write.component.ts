import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-and-write',
  templateUrl: './read-and-write.component.html',
  styleUrls: ['./read-and-write.component.css']
})
export class ReadAndWriteComponent implements OnInit {

  
  constructor(public route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
  }

  onClick(val){
    if(val==1){
      this.router.navigate(['/read-and-write/training'])
    }else{
      this.router.navigate(['/read-and-write/alphabet'])
    }
  }

}
