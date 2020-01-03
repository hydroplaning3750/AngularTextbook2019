import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  myData: any;
  percentDone: number;

  constructor(private _httpClient: HttpClient) {
    const req = new HttpRequest('GET',
                               './data/48MB_DATA.json', {
      reportProgress: true
    });

    _httpClient.request(req)
    .subscribe(data => {
      if (data.type === HttpEventType.DownloadProgress) {
        this.percentDone = Math.round(100 * data.loaded / data.total);
        console.log(`Read ${this.percentDone}% of ${data.total} bytes`);
      } else {
        this.myData = data
      }
    });
  }
}
