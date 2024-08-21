import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { IPost } from '../interfaces/post.interface';
import { environment } from '../../../environments/environment.development';
import { IFirebaseCreateResponse } from '../interfaces/firebase-create-response.interface';
import { IFirebaseGetResponse } from '../interfaces/firebase-get-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private databaseUrl = environment.databaseUrl;

  constructor(private http: HttpClient) { }

  create(post: IPost): Observable<IPost> {
    return this.http.post<IFirebaseCreateResponse>(`${this.databaseUrl}/posts.json`, post)
      .pipe(
        map((response: IFirebaseCreateResponse): IPost => ({
          ...post,
          id: response.name
        }))
      );
  }

  getAll(): Observable<IPost[]> {
    return this.http.get<IFirebaseGetResponse>(`${this.databaseUrl}/posts.json`)
      .pipe(
        map((response: IFirebaseGetResponse): IPost[] => Object.keys(response).map((id: string): IPost => ({
          id,
          ...response[id],
          date: new Date(response[id].date)
        })))
      );
  }

  getById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.databaseUrl}/posts/${id}.json`)
      .pipe(
        map((post: IPost): IPost => ({
          id,
          ...post,
          date: new Date(post.date)
        }))
      );
  }

  update(post: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`${this.databaseUrl}/posts/${post.id}.json`, post);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.databaseUrl}/posts/${id}.json`);
  }
}
