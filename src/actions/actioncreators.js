
import {GET_CITIES,GET_FLIGHT_SCHEDULES,RESET_FLIGHT_SCHEDULES} from './actiontypes';
/**
 * returns the get flights action
 * @param {*} payload - selected source & destinations
 */
export const getSchedules = payload =>{
    return (dispatch)=>{
        fetch("http://localhost:8080/apidata").then(res=>res.json())
        .then(({flights})=>{
            console.log(flights);
            dispatch({
                type: GET_FLIGHT_SCHEDULES,
                payload:filterSchedules(flights.values, payload)
            })
        })
    };
} 

export const resetFlightSchedules = ()=>({
    type: RESET_FLIGHT_SCHEDULES
})

/**
 * returns the get cities action
 */
export const getCities = () => {
    return (dispatch)=>{
        fetch("http://localhost:8080/apidata").then(res=>res.json())
        .then(({cities})=>{
            console.log(cities);
            dispatch({
                type: GET_CITIES,
                payload:cities.values
            })
        })
    };
}




/**
 * returns filtered schedules from whole list schedules 
 * @param {*} schedules - all schedules
 * @param {*} payload - source & dest object
 */
const filterSchedules = (schedules, payload) => {
    return schedules.filter(i =>
        (i.Src === payload.source && i.Dest === payload.destination));
}
