import { Component } from '@angular/core';
import { URLService } from '../URL/url.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.css']
})
export class AddNewCardComponent {
  image: File | null = null; // Store the image file
  previewImage: string | ArrayBuffer | null = null; // To store the preview of the image

  constructor(private _ser: URLService) { }

  ngOnInit() { }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.image = event.target.files[0]; // Get the selected file
      const reader = new FileReader(); // Create a FileReader instance

      reader.onload = (e) => {
        // This will be called once the file is read
        this.previewImage = e.target?.result || null; // Store the result
      };

      // Check if this.image is defined before reading
      if (this.image) {
        reader.readAsDataURL(this.image); // Read the file as a data URL
      }
    }
  }


  addNewPerson(data: any) {
    const form = new FormData();

    // Add the data to FormData
    for (let key in data) {
      if (key === 'dateOfBirth') {
        const dateParts = data[key].split('-'); // Split the date into parts (YYYY-MM-DD)
        form.append("DateOfBirthYear", dateParts[0]);
        form.append("DateOfBirthMonth", dateParts[1]);
        form.append("DateOfBirthDay", dateParts[2]);
      } else {
        form.append(key, data[key]);
      }
    }

    // Add the image to FormData
    if (this.image) {
      form.append("photo", this.image as File); // Type assertion to ensure it is treated as a File
    }

    // Send the data to the server
    this._ser.addNewCard(form).subscribe(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }, error => {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred: ' + error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
}
