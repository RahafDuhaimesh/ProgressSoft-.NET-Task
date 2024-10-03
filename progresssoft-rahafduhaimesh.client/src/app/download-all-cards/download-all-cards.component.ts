import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';

@Component({
  selector: 'app-download-all-cards',
  templateUrl: './download-all-cards.component.html',
  styleUrl: './download-all-cards.component.css'
})
export class DownloadAllCardsComponent {
  ngOnInit() { }
  constructor(private _ser: URLService) { }

  downloadAllCards() {
    this._ser.downloadAllCards().subscribe(response => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BusinessCard.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
}
