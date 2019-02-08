import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

 
  getMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c0eda58f6989168ace0818923105cd57")
   
  }
  getMovies1(){
  return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c0eda58f6989168ace0818923105cd57")
  }


  searchMovies(title) {
    console.log(title)
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=c0eda58f6989168ace0818923105cd57&language=en-US&page=1&include_adult=false&query=${title}`)
  }
  getDetails(id)
  {
    console.log(id)
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c0eda58f6989168ace0818923105cd57&language=en-US&page=1&include_adult=false`)
  }


putMovies(title,poster_path){
  console.log("Data is" + title)
  return this.http
  .post("http://localhost:3000/posts",{
    title,
    poster_path
  })
  .subscribe(console.log)
}
displayImage(){
  return this.http.get("http://localhost:3000/posts");

}
  }