import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { busStopActions } from '../_actions';
import Collapsible from 'react-collapsible';
import {Details} from "./Details";

import config from 'config';

class HomePage extends React.Component {

    componentDidMount() {
        if ("geolocation" in navigator) {
            if (typeof config.mock_location_lat === 'undefined' || typeof config.mock_location_lng === 'undefined') {
                let ref = this;
                navigator.geolocation.getCurrentPosition(function(position) {
                    ref.props.getBusStops(position.coords.latitude, position.coords.longitude, 4000);
                });
            } else {
                this.props.getBusStops(config.mock_location_lat, config.mock_location_lng, 4000);
            }
        }
    }

    handleShowHideBusStop(busStop) {
        if (!busStop.hasOwnProperty('more_details')) {
            this.props.getBusStopMoreDetails(busStop.id);
        }
    }

    render() {
        const { busStops } = this.props;
        return (
            <div className="col-md-12">
                <p className="h3">Available Bus Stops Near Me:</p>
                <div className="table-responsive-xl">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Address</th>
                        </tr>
                        </thead>
                        {busStops.items &&
                        <tbody>
                            {busStops.items.map((busStop, index) => {
                                return (
                                    <tr key={busStop.id}>
                                        <th scope="row">{busStop.id}</th>
                                        <td>
                                            <Collapsible
                                                trigger={busStop.address}
                                                onTriggerOpening={() => this.handleShowHideBusStop(busStop)}>
                                                <Details busStop={busStop} key={busStop.id} />
                                            </Collapsible>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        }
                    </table>
                </div>
                {config.grant_type === 'password' &&
                    <p><Link to="/login">Logout</Link></p>
                }
                
            </div>
        );
    }
}

function mapState(state) {
    const { busStops } = state;
    return { busStops };
}

const actionCreators = {
    getBusStops: busStopActions.getAll,
    getBusStopMoreDetails: busStopActions.moreDetails
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };