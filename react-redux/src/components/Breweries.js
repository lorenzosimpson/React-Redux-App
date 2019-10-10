import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBreweries } from '../actions'

const Breweries = props => {
    console.log(props)
    useEffect(() => {
        props.fetchBreweries()
    }, [])
    return (
        <div>
            <p>hi from Breweries</p>
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