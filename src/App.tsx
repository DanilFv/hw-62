import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import type {ICountries} from './types';
import CountriesList from './components/CountriesList/CountriesList.tsx';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [countryId, setCountryId] = useState<string | null>(null);

  const BASE_URL = 'https://restcountries.com/v2/';
  const COUNTRIES_URL = 'all?fields=alpha3Code,name';
  const ALPHA_URL = 'https://restcountries.com/v2/alpha/';


  const axiosData = useCallback(async () => {
    const response = await axios<ICountries[]>(BASE_URL + COUNTRIES_URL);
    const AllCountries = response.data;
    setCountries(AllCountries);
  }, []);

  useEffect(() => {
    void axiosData();
  }, [axiosData]);


  return (
      <>
        <div className="container mt-4">
          <div className="row border bg-white">

           <CountriesList countries={countries} />


            <div className="col-8 p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3>Argentina</h3>
                  <p className="mb-1"><strong>Capital:</strong> Buenos Aires</p>
                  <p className="mb-3"><strong>Population:</strong> 44 M</p>
                </div>


                <img
                    src="https://flagcdn.com/w80/ar.png"
                    alt="Argentina flag"
                    className="border"
                />
              </div>

              <h6>Borders with:</h6>
              <ul>
                <li>Bolivia (Plurinational State of)</li>
                <li>Brazil</li>
                <li>Chile</li>
                <li>Paraguay</li>
                <li>Uruguay</li>
              </ul>
            </div>
          </div>
        </div>
      </>
  )
};

export default App
