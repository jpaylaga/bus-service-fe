import React from 'react';
import { connect } from 'react-redux';
import {busStopActions} from "../_actions";
import Collapsible from "react-collapsible";

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            details: {}
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.busStop.hasOwnProperty('more_details') && !this.state.updated) {
            this.setState({
                updated: true,
                details: this.props.busStop.more_details
            });
        }
    }

    render() {
        let {updated, details} = this.state;
        if (updated) {
            return (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Bus</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">ETA</th>
                    </tr>
                    </thead>
                    <tbody>
                    {details.map((detail, index) => {
                        return (
                            <tr key={detail.id}>
                                <th scope="row">{detail.id}</th>
                                <td>{detail.bus.company}</td>
                                <td>{detail.time_of_day}</td>
                                <td>{detail.eta_in_mins} mins</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            );
        }

        return (
            <small>No schedules available</small>
        );
    }
}

function mapState(state) {
    return {};
}

const actionCreators = {
}

const connectedHomePageDetails = connect(mapState, actionCreators)(Details);
export { connectedHomePageDetails as Details };