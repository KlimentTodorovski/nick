import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const button = document.querySelector('#button');
    const auto = false; // Auto scroll
    const intervalTime = 5000;
    let slideInterval;

    const nextSlide = () => {
      // Get current class
      const current = document.querySelector('.current');
      // Remove current class
      current.classList.remove('current');
      // Check for next slide
      if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
      } else {
        // Add current to start
        slides[0].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    };

    const prevSlide = () => {
      // Get current class
      const current = document.querySelector('.current');
      // Remove current class
      current.classList.remove('current');
      // Check for prev slide
      if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
      } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    };

    // Button events
    next.addEventListener('click', e => {
      nextSlide();
      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    prev.addEventListener('click', e => {
      prevSlide();
      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    button.addEventListener('click', e => {
      console.log('here')
      this.router.navigate(['/emotions-answers']);
    });

    // Auto slide
    if (auto) {
      // Run next slide at interval time
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    
  }


}
