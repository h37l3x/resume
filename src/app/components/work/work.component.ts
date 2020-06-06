import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  items = [
    {
      name: 'oh-my-wrap',
      title: 'Oh-My-Wrap',
      description: 'workshop website where you can create wrapping paper with unique design',
      previewImageUrl: '/assets/images/work/ohmywrap/preview.png'
    }
  ];

  exampleItems = [];

  constructor(private activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
