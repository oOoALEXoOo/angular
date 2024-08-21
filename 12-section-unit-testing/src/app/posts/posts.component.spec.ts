import { EMPTY, of, throwError } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostsService } from '../services/posts.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let service: PostsService;
  let component: PostsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(PostsService);
    component = new PostsComponent(service);
  });

  it('should inject posts service', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should call fetch when initialized in ngOnInit', () => {
    const spyOnFetch = spyOn(service, 'fetch').and.returnValue(EMPTY);

    component.ngOnInit();

    expect(spyOnFetch).toHaveBeenCalled();
  });

  it('should update posts after ngOnInit', () => {
    const posts: number[] = [1, 2, 3];

    spyOn(service, 'fetch').and.returnValue(of(posts));

    component.ngOnInit();

    expect(component.posts).toEqual(posts);
  });

  it('should add new post in posts', () => {
    const post = { title: 'test' };

    const spyOnCreate = spyOn(service, 'create').and.returnValue(of(post));

    component.add(post.title);

    expect(spyOnCreate).toHaveBeenCalled();
    expect(component.posts.includes(post)).toBeTruthy();
  });

  it('should update message with error if create returns it', () => {
    const error = 'Test error message';

    spyOn(service, 'create').and.returnValue(throwError(() => error));

    component.add('Post title');

    expect(component.message).toBe(error);
  });

  it('should remove post with id if user confirms', () => {
    const spyOnRemove = spyOn(service, 'remove').and.returnValue(EMPTY);

    spyOn(window, 'confirm').and.returnValue(true);

    component.delete(10);

    expect(spyOnRemove).toHaveBeenCalledWith(10);
  });

  it('should NOT remove post with id if user doesn\'t confirm', () => {
    const spyOnRemove = spyOn(service, 'remove').and.returnValue(EMPTY);

    spyOn(window, 'confirm').and.returnValue(false);

    component.delete(10);

    expect(spyOnRemove).not.toHaveBeenCalled();
  });
});
