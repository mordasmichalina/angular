import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactUrl:string = 'http://127.0.0.1:8000/messages/create/'

  constructor(private http:HttpClient) { }

  sendMessage(newMessage) {
    return this.http.post(this.contactUrl, newMessage)
      .pipe(catchError(this.handleError('sendMessage')))
  }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
