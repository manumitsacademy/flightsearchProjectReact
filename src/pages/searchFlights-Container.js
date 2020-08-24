
import { connect } from 'react-redux';
import { SearchFlights } from './searchflights';
import * as actions from '../actions/actioncreators.js';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";


export const SearchFlightsContainer = compose(withRouter,
    connect(state => ({
        citiesList: state.citites
    }), {
        getSchedules: actions.getSchedules,
        getCities: actions.getCities,
    }))(SearchFlights);