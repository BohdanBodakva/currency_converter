import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyRateServiceService } from '../services/currency-rate-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private currentRateService: CurrencyRateServiceService) { }

  ngOnInit() {
    this.currentRateService.loadCurrentRates()
  }

  reloadRates(){
    this.currentRateService.loadCurrentRates()
  }

  

}
