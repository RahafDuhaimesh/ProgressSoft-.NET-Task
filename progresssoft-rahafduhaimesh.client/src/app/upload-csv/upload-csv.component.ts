import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent {
  csvFile: any; // لتخزين ملف CSV

  constructor(private _ser: URLService) { }

  ngOnInit() { }

  onCSVFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.csvFile = file;
    }
  }

  uploadCSV() {
    const form = new FormData();
    if (this.csvFile) {
      form.append("files", this.csvFile);
    }

    // إرسال البيانات إلى السيرفر
    this._ser.GetBusinessCardCSV(form).subscribe(() => {
      Swal.fire({
        title: 'نجاح!',
        text: 'تم تحميل الملف بنجاح!',
        icon: 'success',
        confirmButtonText: 'موافق'
      });
    }, error => {
      Swal.fire({
        title: 'خطأ!',
        text: 'حدث خطأ: ' + error.message,
        icon: 'error',
        confirmButtonText: 'موافق'
      });
    });
  }

}
