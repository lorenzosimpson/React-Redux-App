import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBreweries } from '../actions'

import Brewery from './Brewery'

const Breweries = props => {
    useEffect(() => {
        props.fetchBreweries()
    }, [])
    return (
        <div className='breweries'>
           {props.breweries.map(brewery => (
               <Brewery id={brewery.id} brewery={brewery}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchBreweries })(Breweries);