import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import type {IBorder, IInfoCountryAPI} from '../../types';
import MainCountry from './MainCountry/MainCountry.tsx';
import CountryBorders from './CountryBorders/CountryBorders.tsx';

interface Props {
    id: string | null;
}

const CountryInfoBlock: React.FC<Props> = ({id}) => {
    const [country, setCountry] = useState<IInfoCountryAPI | null>(null);
    const [borders, setBorders] = useState<IBorder[] | null>(null);

    const fetchData = useCallback(async () => {
        if (!id) return;

        try {
            const response = await axios<IInfoCountryAPI>(`https://restcountries.com/v2/alpha/${id}`);
            const countryData = response.data;
            setCountry(countryData);

            if(!countryData.borders || countryData.borders.length === 0) {
                setBorders([]);
                return;
            }

            const bordersRequest = countryData.borders.map(async c => {
                const border = await axios<IBorder>(`https://restcountries.com/v2/alpha/${c}`);
                return {
                    name: border.data.name,
                    alpha3Code: border.data.alpha3Code,
                }
            });

            const countryBorders = await Promise.all(bordersRequest);
            setBorders(countryBorders);

        } catch (error) {
            console.error(error);
        }


    },[id])

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    return (
        <div className="col-8 p-3">
            <MainCountry country={country} />
            <CountryBorders borders={borders} />
        </div>
    );
};

export default CountryInfoBlock;