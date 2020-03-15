import React from 'react';
import Card from 'react-bootstrap/Card'

const Price = ({cost}) => {

    return (
        <>
            <h1 className={"mt-5"}>Price Average</h1>
            <div className="flex-column text-center">
                <h1>${cost}</h1>
            </div>
        </>
    )
};

export default Price;