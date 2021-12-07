import Product from "src/product/product";

export class CreateProductCommand implements Product {
    name: string;
    photo: string;
    description: string;
}
