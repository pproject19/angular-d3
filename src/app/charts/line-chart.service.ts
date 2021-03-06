import { Injectable } from '@angular/core';

@Injectable()
export class LineChartService {

  constructor() { }
  private lineData: Array<any>;

  getData(): Array<any> {
    //this.lineData = [1, 2, 3, 4, 5];
    this.lineData = [{
      'x': 1,
      'y': 5
    }, {
      'x': 20,
      'y': 20
    }, {
      'x': 40,
      'y': 10
    }, {
      'x': 60,
      'y': 40
    }, {
      'x': 80,
      'y': 5
    }, {
      'x': 100,
      'y': 60
    }];
    return this.lineData;
  }

}