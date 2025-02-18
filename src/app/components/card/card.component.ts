import { CommonModule } from '@angular/common';
import { Component, Input, input, inject, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { TruncatePipe } from '../../pipes/trucante.pipe';
import { TYPE_MAP } from '../../models/constants/cardType';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  card = new Card();

  typeMAP = TYPE_MAP;

  @Output()
  onChange = new EventEmitter()

  cardService = inject(CardService);
    
  removeCard(id: string) {
    this.onChange.emit(id);
  }
}
