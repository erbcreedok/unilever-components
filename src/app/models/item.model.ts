import {Product, ProductInterface} from './product.model';
import {Promo, PromoInterface} from './promo.model';
import {CommentInterface, Comment} from './comment.model';
export interface ItemInterface {
    id: number;
    promo: PromoInterface;
    product: ProductInterface;
    completed: number;
    type: number;
    discount: number;
    comments: CommentInterface[];
    shelfshare: {
        id: number,
        category: {
            pk: number,
            name: string,
            brands: {
                pk: number,
                name: string
            }[]
        },
        discount: number,
        client: {
            id: number,
            name: string
        }
    };
}

export class Item {
    public id: number;
    public promo: Promo;
    public product: Product;
    public completed: number;
    public type: number;
    public shelfShare: {
        id: number,
        category: {
            pk: number,
            name: string,
            brands: {
                  pk: number,
                  name: string
            }[]
        },
        discount: number,
        client: {
            id: number,
            name: string
        }
    };
    public discount: number;
    public comments: Comment[];

    constructor (item: ItemInterface) {
        this.setItem(item);
    }

    public setItem(item: ItemInterface): Item {
        if (!item) {
            return this;
        }
        this.id = item.id;
        this.promo = new Promo(item.promo);
        this.product = new Product(item.product);
        this.completed = item.completed;
        this.type = item.type;
        this.comments = [];
        if (item.comments) {
            item.comments.forEach(c => this.comments.push(new Comment(c)));
        }
        this.discount = item.discount;
        this.shelfShare = item.shelfshare;
        return this;
    }

    public getItemInterface(): ItemInterface {
        const comments: CommentInterface[] = this.comments.map(c => c.getCommentInterface());
        return {
            id: this.id,
            promo: this.promo ? this.promo.getPromoInterface() : null,
            product: this.product ? this.product.getProductInterface() : null,
            completed: this.completed,
            type: this.type,
            comments: comments,
            discount: this.discount,
            shelfshare: this.shelfShare
        };
    }
}