import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import type {ICountries, ICountriesAPI} from './types';
import CountriesList from './components/CountriesList/CountriesList.tsx';
import './App.css';
import Spinner from './components/UI/Spinner/Spinner.tsx';

const App = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [countryId, setCountryId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(countryId);

  const BASE_URL = 'https://restcountries.com/v2/';
  const COUNTRIES_URL = 'all?fields=alpha3Code,name';
  const ALPHA_URL = 'https://restcountries.com/v2/alpha/';


  const axiosData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await axios<ICountriesAPI[]>(BASE_URL + COUNTRIES_URL);
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
          </div>
        </div>
      </>
  )
};

export default App
