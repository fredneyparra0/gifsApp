import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifService: GifsService) { }

  get historial () {
    return this.gifService.history
  }

  searchHistory (value:string) {
    this.gifService.insertTerm(value)
  }

  ngOnInit(): void {
  }

}
