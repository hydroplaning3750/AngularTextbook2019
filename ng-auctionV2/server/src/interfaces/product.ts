//Note - Its always best practices to define types as interfaces in TypeScript
//  Due to the fact that Javascript does not support interfaces, the compiled
//  code won't include Product -- reducing the size of runnable code in your application

export interface IProduct {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    description: string;
    categories: string[];
}