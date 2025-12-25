import * as React from 'react';

interface Props {
    className?: string;
    text: string;
    onSelectShowInfoCountry: () => void;
}

const CountriesItem:React.FC<Props> = ({className, text, onSelectShowInfoCountry}) => {
    return (
        <li className={className} onClick={onSelectShowInfoCountry}>{text}</li>
    );
};

export default CountriesItem;


