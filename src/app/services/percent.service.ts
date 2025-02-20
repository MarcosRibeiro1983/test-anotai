
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PercentService {
  private billing = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };

  get(): { [key: string]: number } {
    return this.billing;
  }
}
