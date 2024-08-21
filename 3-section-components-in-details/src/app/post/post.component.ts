import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input() post: Post | null = null;
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('infoDiv', { static: true }) infoDivRef: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.infoDivRef.nativeElement);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  removePost() {
    this.onRemove.emit(this.post?.id);
  }
}
