import { Tag } from "src/app/shared/tag.model";

export class Product {
    public name: string;
    public description: string;
    public imagePath: string;
    public priceTag: string;

    constructor(name: string, desc: string, imagePath:string, priceTag:string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.priceTag = priceTag;
    }
}