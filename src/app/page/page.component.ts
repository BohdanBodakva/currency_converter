import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyRateServiceService } from '../services/currency-rate-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private http: HttpClient,
    private currentRateService: CurrencyRateServiceService) { }

  ngOnInit() {
    this.http.get<any>("https://api.apilayer.com/fixer/latest?base=UAH&symbols=USD,EUR,GBP,PLN,SEK", { headers: { "apikey": "6AFmfYHWUc3v455qHzSp0tqamWPyjFU8" } }).subscribe(result => {
      console.log(result)
      this.currentRateService.current_rates.set("USD", Number(result.rates.USD))
      this.currentRateService.current_rates.set("EUR", Number(result.rates.EUR))
      this.currentRateService.current_rates.set("GBP", Number(result.rates.GBP))
      this.currentRateService.current_rates.set("PLN", Number(result.rates.PLN))
      this.currentRateService.current_rates.set("SEK", Number(result.rates.SEK))
    })
  }

}
