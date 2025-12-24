import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

interface Props {
    id: string | null;
}

const CountryInfoBlock: React.FC<Props> = ({id}) => {
    const [country, setCountry] = useState([]);
    console.log(country);

    const fetchData = useCallback(async () => {
        const response = await axios('https://restcountries.com/v2/all?fields=alpha3Code,name' + id);
        const countryInfo = response.data;
        setCountry(countryInfo);
    },[id])

    useEffect(() => {
        void fetchData();
    }, [fetchData]);


    return (
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
    );
};

export default CountryInfoBlock;