import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 
  pictures: any[] = [
    './assets/aa.png',
    './assets/ab.png',
    './assets/ac.png',
    './assets/ad.png',
    './assets/ae.png',
    './assets/af.png',
    './assets/ag.png',
    './assets/ah.png',
    './assets/ak.png',
    './assets/al.png',
  ];

  quotes: string[] = [
    "In the world of dreams and magic, Barbie dances to her own melody, inspiring us to be unapologetically ourselves.",
    "Barbie's new adventure teaches us that dreams have no limits; they're the key to unlocking endless possibilities",
    "In a whirlwind of friendship and courage, Barbie shows us that together, we can conquer any challenge that comes our way.",
    "As the stars twinkle in Barbie's eyes, she reminds us that the power of imagination can light up our world."
  ];

  newQuote: string = '';

  addQuoteToList() {
    const trimmedQuote = this.newQuote.trim();
  
    if (trimmedQuote !== '') {
      this.quotes.push(trimmedQuote); // Push to the 'quotes' array
      this.newQuote = ''; // Clear the input after adding to the list
    }
  }
  
}
