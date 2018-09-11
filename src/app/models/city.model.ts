import {Region, RegionInterface} from './region.model';

export interface CityInterface {
    id: number;
    name: string;
    region: RegionInterface;
}

export class City {
    public id: number;
    public name: string;
    public region: Region;

    constructor( city: CityInterface | City) {
        this.setCity(city);
    }

    public setCity(city: CityInterface | City): City {
        if (!city) {
            return this;
        }
        this.id = city.id;
        this.name = city.name;
        this.region = new Region(city.region);
        return this;
    }

    public getCityInterface(): CityInterface {
        return {
            id: this.id,
            name: this.name,
            region: this.region.getRegionInterface(),
        }
    }
}