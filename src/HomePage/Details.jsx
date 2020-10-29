import React from 'react';
import { connect } from 'react-redux';
import {busStopActions} from "../_actions";

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            details: this.props.busStop
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.busStop.hasOwnProperty('more_details') && !this.state.updated) {
            this.setState({
                updated: true,
                details: this.props.busStop
            });
        }
    }

    render() {
        return (
            <p>TEST</p>
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