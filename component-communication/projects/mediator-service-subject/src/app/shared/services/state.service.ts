import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _stateSubject: BehaviorSubject<string> = new BehaviorSubject('');

  public set searchCriteria(value: string) {
    this._stateSubject.next(value);
  }

  public getState(): Observable<string> {
    return this._stateSubject.asObservable();
  }
}
