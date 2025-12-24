import * as React from 'react';

interface Props {
    className?: string;
    text: string;
}

const CountriesItem:React.FC<Props> = ({className, text}) => {
    return (
        <li className={className}>{text}</li>
    );
};

export default CountriesItem;


