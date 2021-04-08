import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersUrl:string = 'http://127.0.0.1:8000/users/'
  registerUrl:string = 'http://127.0.0.1:8000/users/register/'
  tokenUrl:string = 'http://127.0.0.1:8000/users/auth/'
  currentUser:User
  token = 'b1fdca41e4fd2e4e8c8de0c141bada84d5b71a5f'

  constructor(private http:HttpClient) { }

  loginUser(userData) {
    let options = { headers: new HttpHeaders({ 'Authorization': 'token '+ this.token})}
    return this.http.get(this.usersUrl, options)
      .pipe(tap(data => {
        this.currentUser = <User>data['user'];
        console.log(this.currentUser);
        console.log(data);
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
  }

  login(userData) {
    return this.http.post<any>(this.tokenUrl, userData)
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
  }

  registerUser(userData) {
    return this.http.post(this.registerUrl, userData)
      .pipe(catchError(this.handleError<User>('registerUser')))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
