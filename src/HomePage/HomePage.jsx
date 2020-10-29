import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { busStopActions } from '../_actions';

class HomePage extends React.Component {

    componentDidMount() {
        this.props.getBusStops();
    }

    handleShowHideBusStop(busStop) {
        const doShowDetails = (details) => {
            // code here
        };

        if (busStop.hasOwnProperty('more_details')) {
            doShowDetails(busStop.more_details);
        } else {
            this.props.getBusStopMoreDetails(busStop.id).then(r => {
                doShowDetails(r.busStop.data[0]);
            });
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
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        {busStops.items &&
                        <tbody>
                            {busStops.items.map((busStop, index) => {
                                return (
                                    <tr key={busStop.id}>
                                        <th scope="row">{busStop.id}</th>
                                        <td>{busStop.address}</td>
                                        <td>
                                            <button onClick={() => this.handleShowHideBusStop(busStop)}>Show</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        }
                    </table>
                </div>
                <p><Link to="/login">Logout</Link></p>
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