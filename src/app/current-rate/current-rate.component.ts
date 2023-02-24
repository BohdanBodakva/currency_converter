import { Component } from '@angular/core';
import { CurrencyRateServiceService } from '../services/currency-rate-service.service';

@Component({
  selector: 'app-current-rate',
  templateUrl: './current-rate.component.html',
  styleUrls: ['./current-rate.component.css']
})
export class CurrentRateComponent {
  

  constructor(public currencyRateService: CurrencyRateServiceService){}
}
