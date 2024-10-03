import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { URLService } from '../URL/url.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  searchCriteria = {
    name: '',
    email: '',
    phone: '',
    gender: ''
  };

  @Output() filterResults = new EventEmitter<any[]>(); 

  constructor(private _ser: URLService) { }

  searchCards() {
    const { name, email, phone, gender } = this.searchCriteria;

    this._ser.filterBusinessCards(name, email, phone, gender).subscribe((cards: any[]) => {
      this.filterResults.emit(cards);
    }, error => {
      console.error('Error fetching filtered cards', error);
    });
  }
  resetFilter() {
    this.searchCriteria = {
      name: '',
      email: '',
      phone: '',
      gender: ''
    };

    this.searchCards();

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

}
