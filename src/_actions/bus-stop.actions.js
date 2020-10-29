import {busStopService} from "../_services";
import {busStopConstants} from "../_constants";

export const busStopActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        busStopService.getAll()
            .then(
                busStops => dispatch(success(busStops)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: busStopConstants.GETALL_REQUEST } }
    function success(busStops) { return { type: busStopConstants.GETALL_SUCCESS, busStops } }
    function failure(error) { return { type: busStopConstants.GETALL_FAILURE, error } }
}