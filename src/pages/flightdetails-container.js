
import { connect } from 'react-redux';
import { FlightDetails } from './flightdetails';
import * as actions from '../actions/actioncreators.js';
export const FlightDetailsContainer = connect(state => ({
    schedules: state.flightSchedules
}),{
    resetSchedules:actions.resetFlightSchedules
})(FlightDetails);