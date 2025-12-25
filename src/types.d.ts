export interface IInfoCountryAPI {
    name: string;
    capital: string;
    population: number;
    flags: {
        png: string;
    };
    borders: string[];
}


export interface IBorder {
    name: string;
    alpha3Code: string;
}