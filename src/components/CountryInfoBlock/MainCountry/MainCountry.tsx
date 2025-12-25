import type {IInfoCountryAPI} from '../../../types';
import React from 'react';

interface Props {
    country: IInfoCountryAPI;
}

const MainCountry: React.FC<Props> = ({country}) => {
    return (
        <div className="d-flex justify-content-between align-items-start">
            <div>
                <h3>{country.name}</h3>
                <p className="mb-1"><strong>{country.capital}</strong> Buenos Aires</p>
                <p className="mb-3"><strong>{country.population.toLocaleString()}</strong> 44 M</p>
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