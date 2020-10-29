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
    default:
      return state
  }
}