
import {GET_CITIES,GET_FLIGHT_SCHEDULES,RESET_FLIGHT_SCHEDULES} from "../actions/actiontypes";

/**
 * returns the array of flight details by providing the source & dest
 * @param {*} state - array of flight details
 * @param {*} action - unique action
 */
export const flightSchedules = (state = [], action) => {
    switch (action.type) {
        case GET_FLIGHT_SCHEDULES:
            return action.payload
        case RESET_FLIGHT_SCHEDULES:
            return []
        default:
            return state;
    }
}

/**
 * returns the list of cities
 * @param {*} state - array
 * @param {*} action - action object
 */
export const citites = (state= [], action) => {
    switch (action.type) {
        case GET_CITIES:            
            return action.payload;    
        default:
            return state;
    }
}
