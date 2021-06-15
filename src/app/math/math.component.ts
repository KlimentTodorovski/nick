import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  constructor(
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
