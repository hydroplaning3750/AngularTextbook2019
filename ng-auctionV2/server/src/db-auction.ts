import * as fs from 'fs';
import * as util from 'util';
import { IProduct } from "./interfaces/product";
import { IProductSearchParams } from './interfaces/IProductSearchParams';

type DB = IProduct[];

const readFile = util.promisify(fs.readFile);
const db$: Promise<DB> = readFile('./data/products.json', 'utf8')
    .then(JSON.parse, console.error);

export async function getAllCategories(): Promise<string[]> {
    const allCategories = (await db$)
        .map(p => p.categories)
        .reduce((all, current) => all.concat(current), []);
    
    return [...new Set(allCategories)];
}

export async function getProducts(params: IProductSearchParams = {}): Promise<IProduct[]> {
    return filterProducts(await db$, params);
}

export async function getProductById(id: number): Promise<IProduct> {
    return (await db$).find(p => p.id === id);
}

export async function getProductsByCategory(category: string): Promise<IProduct[]> {
    return (await db$).filter(p => p.categories.includes(category));
}

function filterProducts(products: IProduct[], params: IProductSearchParams): IProduct[] {
    //Filter the products to conform to the search params by defining conditions for which to exclude products from the result set
    return products.filter(p => {
      if (params.title && !p.title.toLowerCase().includes(params.title.toLowerCase())) {
        return false;
      }
      if (params.minPrice && p.price < parseInt(params.minPrice)) {
        return false;
      }
      if (params.maxPrice && p.price > parseInt(params.maxPrice)) {
        return false;
      }
      return true;
    });
}