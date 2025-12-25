import type {IInfoCountryAPI} from '../../../types';
import React from 'react';

interface Props {
    country: IInfoCountryAPI | null;
}

const MainCountry: React.FC<Props> = ({country}) => {
    if (!country) {
        return <p>Select country</p>;
    }
    return (
        <div className="d-flex justify-content-between align-items-start">
            <div>
                <h3>{country.name}</h3>
                <p className="mb-1"><strong>Capital: </strong>{country.capital}</p>
                <p className="mb-3"><strong>Population: </strong>{country.population.toLocaleString()}</p>
            </div>


            <img
                src={country.flags.png}
                alt={country.name}
                className="border"
            />
        </div>
    );
};

export default MainCountry;