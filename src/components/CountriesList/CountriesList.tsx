import type {ICountries} from '../../types';
import * as React from 'react';
import CountriesItem from './CountriesItem/CountriesItem.tsx';

interface Props {
    countries: ICountries[];
}

const CountriesList: React.FC<Props> = ({countries}) => {
    return (
        <div className="col-4 border-end p-2">
            <ul
                className="list-group countries-list"
                style={{ height: '700px', overflow: 'auto' }}
            >
                {countries.map((country) => (
                    <CountriesItem key={country.alpha3Code} className='list-group-item list-group-item-action' text={country.name} />
                ))}
            </ul>
        </div>
    );
};

export default CountriesList;