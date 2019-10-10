import React from 'react';

const Brewery = props => {
    console.log(props)
    return (
        <div className='brewery'>
            <a href={props.brewery.website_url} target='_blank' rel='noopener noreferrer'><h1>{props.brewery.name}</h1></a>
            <h5>{props.brewery.brewery_type}</h5>
            <p>{props.brewery.city}, {props.brewery.state}</p>
        </div>
    )
}

export default Brewery