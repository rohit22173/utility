import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListPageComponent } from './list.page.component';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  exports: [ListPageComponent]
})
export class ListPagesModule { }
