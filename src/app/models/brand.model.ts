export interface BrandInterface {
  id: number;
  name: string;
}

export class Brand {
  public id: number;
  public name: string;

  constructor(brand: BrandInterface) {
    this.setBrand(brand);
  }

  public setBrand(brand: BrandInterface): Brand {
    if (!brand) {
      return this;
    }
    this.id = brand.id;
    this.name = brand.name;
    return this;
  }

  public getBrandInterface(): BrandInterface {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
