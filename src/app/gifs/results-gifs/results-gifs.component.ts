import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-results-gifs',
  templateUrl: './results-gifs.component.html',
  styleUrls: ['./results-gifs.component.css']
})
export class ResultsGifsComponent {

  constructor(private gifService: GifsService) { }

  get results () {
    return this.gifService.dataGifs;
  }

}
