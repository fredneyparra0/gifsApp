import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsGifsComponent } from './results-gifs/results-gifs.component';



@NgModule({
  declarations: [
    GifPageComponent,
    SearchComponent,
    ResultsGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifPageComponent
  ]
})
export class GifsModule { }
