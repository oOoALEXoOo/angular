import {
  ComponentFixture, fakeAsync, TestBed, tick, waitForAsync
} from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let service: PostsService;
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [
        PostsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(PostsService);
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  // xit('should fetch posts on ngOnInit', () => {
  //   const posts = [1, 2, 3];
  //
  //   spyOn(service, 'fetch').and.returnValue(of(posts));
  //
  //   fixture.detectChanges();
  //
  //   expect(component.posts).toEqual(posts);
  // });

  it('should fetch posts on ngOnInit (promise)', fakeAsync(() => {
    const posts = [1, 2, 3];

    spyOn(service, 'fetchPromise').and.returnValue(Promise.resolve(posts));

    fixture.detectChanges();

    tick();

    expect(component.posts).toEqual(posts);
    console.log('EXPECT CALLED');

    // fixture.whenStable().then(() => {
    //   expect(component.posts).toEqual(posts);
    //   console.log('EXPECT CALLED');
    // });
  }));
});
