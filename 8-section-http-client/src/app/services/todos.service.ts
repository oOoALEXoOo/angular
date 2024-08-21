import { Injectable } from '@angular/core';
import {
  HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders
} from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo(todo: ITodo): Observable<ITodo> {
    const headers = new HttpHeaders({
      MyCustomHeader: Math.random().toString()
    });

    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers
    });
  }

  fetchTodos(): Observable<any> {
    return this.http.get<ITodo[] | null>('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: '4',
        custom: 'anything'
      },
      observe: 'response'
    })
      .pipe(
        map((response) => response.body),
        delay(500),
        catchError((error: HttpErrorResponse) => {
          console.log('Error: ', error.message);
          return throwError(() => error);
        })
      );
  }

  removeTodo(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    })
      .pipe(
        tap((event: HttpEvent<void>) => {
          if (event.type === HttpEventType.Sent) {
            console.log('Sent: ', event);
          }

          if (event.type === HttpEventType.Response) {
            console.log('Response: ', event);
          }
        })
      );
  }

  completeTodo(id: number): Observable<any> {
    return this.http.put<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    }, {
      responseType: 'json'
    });
  }
}
