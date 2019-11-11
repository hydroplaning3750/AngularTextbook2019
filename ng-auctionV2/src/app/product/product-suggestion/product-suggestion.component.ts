import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { Observable } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent {
  @Input() products: IProduct[];
  
  readonly columns$: Observable<number>; 

  private readonly _breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ]
  ]);

  constructor(private _mediaObserver: MediaObserver) {
    this.columns$ = this._mediaObserver.asObservable()
      .pipe(
        map((mc: MediaChange[]) => <number>this._breakpointsToColumnsNumber.get(mc[0].mqAlias)),
        startWith(3) //Bug workaround
      );
   }
}
