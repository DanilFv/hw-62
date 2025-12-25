import type {IBorder} from '../../../types';
import React from 'react';

interface Props {
    borders: IBorder[];
}

const CountryBorders: React.FC<Props> = ({borders}) => {
    return (
        <>
            {borders.length === 0 && <h2>No Borders</h2>}
            {borders.length > 0 && (
                <div>
                    <h6>Borders with:</h6>
                    <ul>
                        {borders.map((border: IBorder) => (
                            <li>{border.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
};

export default CountryBorders;