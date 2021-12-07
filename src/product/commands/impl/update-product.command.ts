import Product from "src/product/product";

export class UpdateProductCommand implements Product {
    id: number;
    name: string;
    photo: string;
    description: string;
}
