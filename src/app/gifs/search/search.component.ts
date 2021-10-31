import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor( private gifSerive: GifsService ) { }

  @ViewChild('txtValue') txtSearch!: ElementRef<HTMLInputElement>

  search () {
    if (!this.txtSearch.nativeElement.value.length) { return }

    this.gifSerive.insertTerm(this.txtSearch.nativeElement.value.toLocaleLowerCase())

    this.txtSearch.nativeElement.value = '';
  }


}
