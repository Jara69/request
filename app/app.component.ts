import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-request';

  private articles = [];
  public search = '';
  // tslint:disable-next-line:max-line-length
  public adresa = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-13&sortBy=publishedAt&apiKey=9d39a39535f2473592f2f61375f7a00c';

  click() {
    // tslint:disable-next-line:max-line-length
    this.adresa = 'https://newsapi.org/v2/everything?q=' + this.search + '&from=2020-01-13&sortBy=publishedAt&apiKey=9d39a39535f2473592f2f61375f7a00c';
    this.httpClient
      .get(this.adresa)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
  }
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get(this.adresa)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
  }

}
