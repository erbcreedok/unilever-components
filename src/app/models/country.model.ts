export interface CountryInterface {
    id: number;
    name: string;
}

export class Country {
    public id: number;
    public name: string;

    constructor(country: CountryInterface | Country) {
        this.setCountry(country);
    }

    public setCountry(country: CountryInterface | Country): Country {
        if (!country) {
            return this;
        }
        this.id = country.id;
        this.name = country.name;
        return this;
    }

    public getCountryInterface(): CountryInterface {
        return {
            id: this.id,
            name: this.name,
        };
    }
}
