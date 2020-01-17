export interface IProductSearchParams {
    [key: string]: any; // To make compatible with HttpParams type.
    productTitle?: string;
    minPrice?: string;
    maxPrice?: string;
}
