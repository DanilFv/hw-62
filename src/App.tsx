import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import CountriesList from './components/CountriesList/CountriesList.tsx';
import './App.css';
import Spinner from './components/UI/Spinner/Spinner.tsx';
import CountryInfoBlock
  from './components/CountryInfoBlock/CountryInfoBlock.tsx';
import type {IBorder} from './types';

const App = () => {
  const [countries, setCountries] = useState<IBorder[]>([]);
  const [countryId, setCountryId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(countries);

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
};

export default App
