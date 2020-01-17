import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'nga-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridComponent {
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
        map((mc: MediaChange[]) => <number>this._breakpointsToColumnsNumber.get(mc[0].mqAlias))
      );
  }
}
