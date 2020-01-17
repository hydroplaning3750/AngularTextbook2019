import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  createObservableService(): Observable<Date> {
    return new Observable<Date>(
      observer => {
        setInterval(() => //Emits the new date every second
          observer.next(new Date()),
          1000);
      }
    );
  }
}
