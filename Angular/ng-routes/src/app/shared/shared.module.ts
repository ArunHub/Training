import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [M1Component, M2Component]
})
export class SharedModule { }
