import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyect-card',
  imports: [CommonModule],
  templateUrl: './proyect-card.component.html',
  styleUrl: './proyect-card.component.css'
})
export class ProyectCardComponent {
  @Input() category!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() weburl!: string;
  @Input() githuburl!: string;
  @Input() tags: string[] = [];
  @Input() imageSrc!: string;
  @Input() imageSrc2!: string;
  @Input() imageSrc3!: string;
}
