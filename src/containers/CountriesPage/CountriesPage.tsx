import {useCallback, useEffect, useState} from 'react';
import type {IBorder} from '../../types';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import CountriesList from '../../components/CountriesList/CountriesList.tsx';
import CountryInfoBlock
    from '../../components/CountryInfoBlock/CountryInfoBlock.tsx';


const CountriesPage = () => {
    const [countries, setCountries] = useState<IBorder[]>([]);
    const [countryId, setCountryId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

    const axiosData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await axios<IBorder[]>(URL);
            const AllCountries = response.data;
            setCountries(AllCountries);

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    }, []);

    useEffect(() => {
        void axiosData();
    }, [axiosData]);

    return (
        <>
            <div className="container mt-4">
                {isLoading && <Spinner />}
                <div className="row border bg-white">
                    <CountriesList countries={countries} onSelectShowInfoCountry={setCountryId} />
                    <CountryInfoBlock id={countryId} />
                </div>
            </div>
        </>
    )
}

export default CountriesPage;