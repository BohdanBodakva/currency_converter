import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateServiceService {

  currencyNamings: string[] = ["UAH", "USD", "EUR", "GBP", "PLN", "SEK"]  
  currencyNamingsForCurrentRate: string[] = ["USD", "EUR", "GBP", "PLN", "SEK"]

  baseCurrency: string = "UAH"
  currentCurrency: string = this.currencyNamingsForCurrentRate[0]

  current_rates = new Map<string, number>([
    ["UAH", 1],
    ["USD", 2], 
    ["EUR", 3],    
    ["GBP", 4],
    ["PLN", 5],
    ["SEK", 6],
  ])

  // current_USD_EUR: number = 0
  // current_USD_UAH: number = 0
  // current_USD_GBP: number = 0
  // current_USD_PLN: number = 0
  // current_USD_SEK: number = 0

  constructor() { }
}
