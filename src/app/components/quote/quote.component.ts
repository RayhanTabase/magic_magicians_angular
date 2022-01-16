import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../../services/quote.service'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quoteData: any = {
  }
  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe((quote)=>{
      this.quoteData = quote
    }) 
  }
}
