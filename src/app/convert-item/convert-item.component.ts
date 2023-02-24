import { Component, Input } from '@angular/core';
import { ConvertServiceService } from '../services/convert-service.service';
import { CurrencyRateServiceService } from '../services/currency-rate-service.service';

@Component({
  selector: 'app-convert-item',
  templateUrl: './convert-item.component.html',
  styleUrls: ['./convert-item.component.css']
})
export class ConvertItemComponent {

  @Input() isConvertItemLeft = true

  constructor(public currencyRateService: CurrencyRateServiceService,
              public convertService: ConvertServiceService){}

  clearLeftInputField(){
    this.convertService.leftField = 0
  }

  clearRightInputField(){
    this.convertService.rightField = 0
  }

  convertIntoRightInput(){
    let leftValue = this.convertService.leftField

    let leftCurrency = this.convertService.leftCurrency
    let leftCurrencyRate = this.currencyRateService.current_rates.get(leftCurrency)

    let rightCurrency = this.convertService.rightCurrency
    let rightCurrencyRate = this.currencyRateService.current_rates.get(rightCurrency)

    this.convertService.rightField = leftValue / leftCurrencyRate! * rightCurrencyRate!
  }

  convertIntoLeftInput(){
    let rightValue = this.convertService.rightField

    let leftCurrency = this.convertService.leftCurrency
    let leftCurrencyRate = this.currencyRateService.current_rates.get(leftCurrency)

    let rightCurrency = this.convertService.rightCurrency
    let rightCurrencyRate = this.currencyRateService.current_rates.get(rightCurrency)

    this.convertService.leftField = rightValue / rightCurrencyRate! * leftCurrencyRate!
  }
}
