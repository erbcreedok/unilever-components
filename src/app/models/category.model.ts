export interface CategoryInterface {
  id: number;
  name: string;
}

export class Category {
  public id: number;
  public name: string;

  constructor(category: CategoryInterface) {
    this.setCategory(category);
  }

  public setCategory(category: CategoryInterface): Category {
    if (!category) {
      return this;
    }
    this.id = category.id;
    this.name = category.name;
    return this;
  }

  public getCategoryInterface(): CategoryInterface {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
