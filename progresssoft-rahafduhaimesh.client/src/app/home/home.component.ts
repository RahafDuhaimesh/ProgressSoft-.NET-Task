import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardsArray: any[] = [];
  filteredCards: any[] = [];

  constructor(private _ser: URLService) { }

  ngOnInit() {
    this.getALLCards();
  }

  getALLCards() {
    this._ser.getAllCards().subscribe((data) => {
      this.cardsArray = data;
      this.filteredCards = data;
    });
  }

  updateFilteredCards(cards: any[]) {
    this.filteredCards = cards; 
  }

  downloadQRCode(id: any): void {
    this._ser.GenerateQRCodeForCard(id).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'image/png' });
      saveAs(blob, `QRCode_${id}.png`);
    });
  }
  downloadExcel(id:any) {
    debugger
    this._ser.getCardByIDasExcel(id).subscribe((response) => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'BusinessCard.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error downloading file:', error);

      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while downloading the file. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }

  downloadAllCards() {
    debugger
    this._ser.downloadAllCards().subscribe((response) => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'BusinessCard.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, error => {
      // Print the error to the console
      console.error('Error downloading file:', error);

      // Show an error alert
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while downloading the file. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }


  deleteCardByID(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._ser.deleteCardByID(id).subscribe({
          next: () => {
            this.cardsArray = this.cardsArray.filter(card => card.id !== id);
            this.filteredCards = this.filteredCards.filter(card => card.id !== id);
            Swal.fire(
              'Deleted!',
              'Your card has been deleted.',
              'success'
            );
          },
          error: (error) => {
            console.error('Error deleting card:', error);
            Swal.fire({
              title: 'Error!',
              text: 'An error occurred while deleting the card.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        });
      }
    });
  }
}






