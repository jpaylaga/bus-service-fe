import {busStopService} from "../_services";
import {busStopConstants} from "../_constants";

export const busStopActions = {
    getAll,
    moreDetails
};

function getAll(lat, long, radius) {
    return dispatch => {
        dispatch(request(lat, long, radius));

        busStopService.getAll(lat, long, radius)
            .then(
                busStops => dispatch(success(busStops)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(lat, long, radius) { return { type: busStopConstants.GETALL_REQUEST, lat, long, radius } }
    function success(busStops) { return { type: busStopConstants.GETALL_SUCCESS, busStops } }
    function failure(error) { return { type: busStopConstants.GETALL_FAILURE, error } }
}

function moreDetails(id) {
    return dispatch => {
        dispatch(request(id));

        busStopService.moreDetails(id)
            .then(
                busStop => dispatch(success(busStop)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: busStopConstants.MORE_DETAILS_REQUEST, id } }
    function success(busStop) { return { type: busStopConstants.MORE_DETAILS_SUCCESS, busStop } }
    function failure(id, error) { return { type: busStopConstants.MORE_DETAILS_FAILURE, id, error } }
}