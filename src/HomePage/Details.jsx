import React from 'react';
import { connect } from 'react-redux';
import {busStopActions} from "../_actions";

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
            console.log(this.props.busStop.more_details);
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
                <p>DATA</p>
            );
        }

        return (
            <small>Loading...</small>
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