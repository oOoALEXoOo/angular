import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../../../shared/interfaces/post.interface';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  transform(posts: IPost[], search = ''): IPost[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter((post: IPost) => post.title.toLowerCase().includes(search.toLowerCase()));
  }
}
