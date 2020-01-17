import { IProduct } from '../interfaces/product';
import { Observable } from 'rxjs';
import { IProductSearchParams } from '../interfaces/IProductSearchParams';

export abstract class BaseProductService {
    abstract getAllProducts(): Observable<IProduct[]>;
    abstract getProductById(id: number): Observable<IProduct>;
    abstract getProductsByCategory(category: string): Observable<IProduct[]>;
    abstract getAllCategories(): Observable<string[]>;
    abstract search(params: IProductSearchParams): Observable<IProduct[]>;
}