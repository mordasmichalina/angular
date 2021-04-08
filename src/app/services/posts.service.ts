import { Injectable } from '@angular/core';
import { Blogpost } from '../models/Post';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl:string = 'http://127.0.0.1:8000/posts-list/'
  postsLimit:string = '?_limit=24'
  postCreateUrl:string = 'http://127.0.0.1:8000/posts-list/create/'
  url:string ='http://127.0.0.1:8000/posts-list/?_limit=24'
  private submitSearch = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  submitSearch$ = this.submitSearch.asObservable();

  clickSearch(searchTerm) {
    this.url = 'http://127.0.0.1:8000/posts-list/?search=' + searchTerm
    this.submitSearch.next();
    console.log(this.url);
  }

  getPosts():Observable<Blogpost[]> {
    return this.http.get<Blogpost[]>(this.url)
      .pipe(catchError(this.handleError<Blogpost[]>('getPosts', [])))
  }

  getDetail(id:number):Observable<Blogpost> {
    return this.http.get<Blogpost>(this.postsUrl+id+'/')
      .pipe(catchError(this.handleError<Blogpost>('getDetail')))
  }

  savePost(newPost) {
    console.log(newPost)
    return this.http.post<Blogpost>(this.postCreateUrl, newPost)
      .pipe(catchError(this.handleError<Blogpost>('savePost')))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  setvalue(value){
    this.url = 'http://127.0.0.1:8000/posts-list/?search=Palawan'
  }
}
