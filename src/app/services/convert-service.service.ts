import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertServiceService {

  leftField = 0
  rightField = 0

  leftCurrency = "UAH"
  rightCurrency = "UAH"

  constructor() { }
}
