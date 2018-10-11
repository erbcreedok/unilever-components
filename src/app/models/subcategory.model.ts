import {Category, CategoryInterface} from './category.model';
export interface SubcategoryInterface {
  id: number;
  name: string;
  category: CategoryInterface;
}

export class Subcategory {
  public id: number;
  public name: string;
  public category: Category;

  constructor(subcategory: SubcategoryInterface) {
    this.setSubcategory(subcategory);
  }

  public setSubcategory(subcategory: SubcategoryInterface): Subcategory{
    if (!subcategory) {
      return this;
    }
    this.id = subcategory.id;
    this.name = subcategory.name;
    this.category = new Category(subcategory.category);
    return this;
  }

  public getSubcategoryInterface(): SubcategoryInterface {
    return {
      id: this.id,
      name: this.name,
      category: this.category ? this.category.getCategoryInterface() : null,
    };
  }
}
