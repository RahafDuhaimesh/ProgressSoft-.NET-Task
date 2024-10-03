import { HttpClient } from '@angular/common/http'; //This is a module from Angular's @angular/common/http package. It allows the service to make HTTP requests (like GET, POST, PUT, DELETE) to interact with backend APIs. In this case, it will be used to send a GET request.
import { Injectable } from '@angular/core'; //This is a decorator from @angular/core. It marks the service as something that can be injected into other components or services. It makes this class eligible for Dependency Injection (DI).
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor(private http: HttpClient) { }

  staticData = "http://localhost:5069/api"


  getAllCards(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/BusinessCard`)
  }

  addNewCard(data : any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/BusinessCard/create`,data)
  }

  downloadAllCards(): Observable<Blob> {
    return this.http.get('http://localhost:5069/api/BusinessCard/DownLoadALLCards', { responseType: 'blob' });
  }


  getCardByID(id : any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/BusinessCard/GetCardByID?id=${id}`)
  }

  getCardByIDasExcel(id: any): Observable<Blob> {
    return this.http.get(`${this.staticData}/BusinessCard/GetCardByIDEXCEL?id=${id}`, { responseType: 'blob' });
  }


  deleteCardByID(id: any): Observable<any> {
    return this.http.delete<any>(`${this.staticData}/BusinessCard/${id}`)
  }
  GenerateQRCodeForCard(id: number): Observable<Blob> {
    return this.http.get<Blob>(`${this.staticData}/BusinessCard/GenerateQRCodeForCard?id=${id}`, { responseType: 'blob' as 'json' });
  }


  GetBusinessCardCSV(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/BusinessCard/GetBusinessCardCSV`,data)
  }

  getBusinessCardXML(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/BusinessCard/GetBusinessCardXML`,data)
  }

  filterBusinessCards(name: string, email: string, phone: string, gender: string): Observable<any> {
    const params = new URLSearchParams();

    if (name) params.append('name', name);
    if (email) params.append('email', email);
    if (phone) params.append('phone', phone);
    if (gender) params.append('gender', gender);

    return this.http.get<any>(`${this.staticData}/BusinessCard/filter?${params.toString()}`);
  }
}
