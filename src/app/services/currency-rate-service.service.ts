import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateServiceService {

  currencyNamings: string[] = ["UAH", "USD", "EUR", "GBP", "PLN", "SEK"]  
  currencyNamingsForCurrentRate: string[] = ["USD", "EUR", "GBP", "PLN", "SEK"]

  baseCurrency: string = "UAH"
  currentCurrency: string = this.currencyNamingsForCurrentRate[0]

  currentRates = new Map<string, number>([
    ["UAH", 1],
    ["USD", 1], 
    ["EUR", 1],    
    ["GBP", 1],
    ["PLN", 1],
    ["SEK", 1]
  ])

  uniqueApiKey = "6AFmfYHWUc3v455qHzSp0tqamWPyjFU8"

  loadCurrentRates(){
    this.http.get<any>("https://api.apilayer.com/fixer/latest?base=UAH&symbols=USD,EUR,GBP,PLN,SEK", { headers: { "apikey": this.uniqueApiKey } }).subscribe(result => {
      console.log(result)
      this.currentRates.set("USD", Number(result.rates.USD))
      this.currentRates.set("EUR", Number(result.rates.EUR))
      this.currentRates.set("GBP", Number(result.rates.GBP))
      this.currentRates.set("PLN", Number(result.rates.PLN))
      this.currentRates.set("SEK", Number(result.rates.SEK))
    })
  }

  constructor(private http: HttpClient) { }
}
