import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  author: string = 'William Paul Thurston'
  quote:string = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.'

  constructor() { }

  ngOnInit(): void {
  }

}
