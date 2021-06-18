import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-and-write',
  templateUrl: './read-and-write.component.html',
  styleUrls: ['./read-and-write.component.css']
})
export class ReadAndWriteComponent implements OnInit {

  
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
