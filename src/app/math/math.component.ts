import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
    document.body.style.background = '#FFDBCF';
  }

  ngOnInit(): void {
  }

}
