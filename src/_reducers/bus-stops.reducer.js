import {busStopConstants} from '../_constants';

export function busStops(state = {}, action) {
  switch (action.type) {
    case busStopConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case busStopConstants.GETALL_SUCCESS:
      return {
        items: action.busStops
      };
    case busStopConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case busStopConstants.MORE_DETAILS_REQUEST:
      return {
        ...state
      };
    case busStopConstants.MORE_DETAILS_SUCCESS:
      const moreDetails = action.busStop.data;
      return {
        ...state,
        items: state.items.map(busStop =>
            moreDetails.length > 0 && busStop.id === moreDetails[0].bus_stop_id
                ? { ...busStop, more_details: moreDetails }
                : busStop
        )
      };
    case busStopConstants.MORE_DETAILS_FAILURE:
      return {
        ...state
      };
    default:
      return state
  }
}