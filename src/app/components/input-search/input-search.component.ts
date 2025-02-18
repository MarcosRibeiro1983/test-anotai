import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent {


  @Output()
  onSearch = new EventEmitter();

  search(event: any) {
    this.onSearch.emit(event.target.value);

  }

}
