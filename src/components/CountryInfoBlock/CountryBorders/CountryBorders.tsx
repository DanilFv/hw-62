import type {IBorder} from '../../../types';
import React from 'react';

interface Props {
    borders: IBorder[] | null;
}

const CountryBorders: React.FC<Props> = ({borders}) => {
    if (borders === null) {
        return null;
    }

    if (borders.length === 0) {
        return <p>No Borders</p>;
    }
    return (
        <>
            <div>
                <h6>Borders with:</h6>
                <ul>
                    {borders.map((border: IBorder) => (
                        <li key={border.alpha3Code}>{border.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default CountryBorders;