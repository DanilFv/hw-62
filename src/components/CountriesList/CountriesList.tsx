import * as React from 'react';
import CountriesItem from './CountriesItem/CountriesItem.tsx';
import type {IBorder} from '../../types';

interface Props {
    countries: IBorder[];
    onSelectShowInfoCountry: (id: string) => void;
}

const CountriesList: React.FC<Props> = ({countries, onSelectShowInfoCountry}) => {
    return (
        <div className="col-4 border-end p-2">
            <ul
                className="list-group countries-list"
                style={{ height: '700px', overflow: 'auto' }}
            >
                {countries.map((country) => (
                    <CountriesItem
                        key={country.alpha3Code}
                        className='list-group-item list-group-item-action'
                        text={country.name}
                        onSelectShowInfoCountry={() => onSelectShowInfoCountry(country.alpha3Code)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CountriesList;