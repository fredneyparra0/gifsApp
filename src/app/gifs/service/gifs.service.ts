import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, GifsInterface } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor ( private http: HttpClient ) {

    this._history = JSON.parse( localStorage.getItem("dataHistory")! ) || [];
  }

  private _history: string[] = [];
  public dataGifs: Datum[] = [];
  private api_key: string = "nWMvpymHRsVsBF7KErqPZ7hvEJ7EUJoY";
  private urlBase: string = "https://api.giphy.com/v1/gifs"

  get history () {
    return [ ...this._history ]
  }

  insertTerm ( value: string ) {
    if (this._history.includes(value)) {
      this.callApi(value)
      return;
    } else {
      if (this._history.length >= 10 ) {
        this._history.pop();
      }
      this._history.unshift(value);
      this.callApi(value)
    } 
  }
  
  callApi (value: string) {
    localStorage.setItem("dataHistory", JSON.stringify(this._history));

    const params = new HttpParams()
      .set("api_key", this.api_key)
      .set("limit", "10")
      .set("q", value)

    this.http.get<GifsInterface>(`${this.urlBase}/search`, { params })
    .subscribe((res ) => {
      console.log(res.data);
      this.dataGifs = res.data;
    })

  }
}
