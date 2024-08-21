import { NgModule } from '@angular/core';
import {
  AsyncPipe,
  CommonModule, CurrencyPipe,
  DatePipe,
  DecimalPipe, JsonPipe,
  LowerCasePipe, NgForOf, PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    MultByPipe,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DecimalPipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    JsonPipe,
    MultByPipe,
    ExMarksPipe,
    NgForOf,
    FormsModule,
    FilterPipe,
    AsyncPipe
  ]
})
export class AppModule { }
