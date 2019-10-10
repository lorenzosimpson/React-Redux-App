import React from 'react';

const Brewery = props => {
    console.log(props)
    return (
        <div className='brewery'>
            <h1>{props.brewery.name}</h1>
            <h5>{props.brewery.brewery_type.toUpperCase()}</h5>
            <p>{props.brewery.city}, {props.brewery.state}</p>
        </div>
    )
}

export default Brewery