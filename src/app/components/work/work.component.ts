import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  items = [
    {
      name: 'oh-my-wrap',
      title: 'Oh-My-Wrap',
      description: 'workshop website where you can create wrapping paper with unique design',
      previewImageUrl: '/assets/images/work/ohmywrap/preview.png'
    }
  ];
}
