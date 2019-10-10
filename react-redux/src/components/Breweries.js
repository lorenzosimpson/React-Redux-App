import React from 'react';
import { connect } from 'react-redux';

const Breweries = props => {
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

export default connect(mapStateToProps, {})(Breweries);