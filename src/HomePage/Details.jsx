import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import config from 'config';

const AnyReactComponent = ({ text }) => <div><p><b>{text}</b></p></div>;

const DisplayMap = ({mapProperties, busStop}) =>
    <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: config.google_maps_api_key }}
            defaultCenter={mapProperties.center}
            defaultZoom={mapProperties.zoom}
            >
            <AnyReactComponent
                lat={busStop.lat}
                lng={busStop.long}
                text={busStop.address}
            />
        </GoogleMapReact>
    </div>;

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

        const mapProperties = {
            center: {
                lat: Number(this.props.busStop.lat),
                lng: Number(this.props.busStop.long)
            },
            zoom: 15
        };

        if (updated) {

            return (
                <div>
                    <DisplayMap
                        mapProperties={mapProperties}
                        busStop={this.props.busStop}
                    />
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
                </div>
            );
        }

        return (
            <div>
                <DisplayMap
                    mapProperties={mapProperties}
                    busStop={this.props.busStop}
                />
                <small>No schedules available</small>
            </div>
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
