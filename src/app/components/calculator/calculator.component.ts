import { Component, OnInit } from '@angular/core';

import { calculate } from './calculate';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  total:string = '';
  next:string = '';
  operation:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: MouseEvent) {
    let data: {[key: string]: string} = {
      total: this.total,
      next: this.next,
      operation:this.operation,
    }
    const element = event.currentTarget as HTMLInputElement;
    const name = element.name;
    const result = calculate(data,name);
    this.total = result.total;
    this.next = result.next;
    this.operation = result.operation;
  }
}
