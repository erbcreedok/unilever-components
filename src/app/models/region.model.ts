import {Country, CountryInterface} from './country.model';

export interface RegionInterface {
    id: number;
    name: string;
    country: CountryInterface;
}
export class Region {
    public id: number;
    public name: string;
    public country: Country;

    constructor(region: RegionInterface | Region) {
        this.setRegion(region);
    }

    public setRegion(region: RegionInterface | Region): Region {
        this.id = region.id;
        this.name = region.name;
        this.country = new Country(region.country);
        return this;
    }

    public getRegionInterface(): RegionInterface {
        return {
            id: this.id,
            name: this.name,
            country: this.country.getCountryInterface(),
        };
    }
}