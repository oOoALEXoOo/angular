import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { SearchField } from '../enums/search-field.enum';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(posts: Post[], search: string = '', field: SearchField = SearchField.Title): Post[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter((post) => post[field].toLowerCase().includes(search.toLowerCase()));
  }
}
