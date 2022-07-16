import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: String) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=86d6b03fb8455d21c1d80f0752bd8a16&query=' + location)
    // 'https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=86d6b03fb8455d21c1d80f0752bd8a16&query=' + location)


  }
}
