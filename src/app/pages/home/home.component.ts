import { CommonModule } from '@angular/common';
import { Card } from './../../models/card';
import { Component, inject, OnInit } from '@angular/core';
import { InputSearchComponent } from "../../components/input-search/input-search.component";
import { CardComponent } from "../../components/card/card.component";
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InputSearchComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  cardService = inject(CardService);
  cards: Card[] = [];

  ngOnInit(): void {
      
    this.getCards();
  }

  getCards() {
    this.cardService.getAll().subscribe({
      next: (cards) => {
        this.cards = cards;
      }, error: (err) => {
        console.log('error', err);
      }
    });
  }

  fetchByName(search: string) {

    if(search.length > 1) {
      const itemSearch = this.cards.filter(card => card.title.toLowerCase().includes( search.toLowerCase() ));
      this.cards = itemSearch;
    } else {
      this.getCards();
    }
  }

  delete(index: number, event: any) {

    this.cards.splice(index, event);
  }

}
