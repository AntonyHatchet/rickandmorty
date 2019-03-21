import * as React from "react";
import { connect } from "react-redux";

import CardElement from "../../components/CardElement";
import { locationsFetchData } from "../../actions/locations";
import { Location } from "../../types/locations";

import "./style.scss";

interface LocationsProps {
  url: string;
  location?: Array<Location>;
  locationsFetchData: Function;
  loading: Function;
}

class Locations extends React.Component<any, any> {
  constructor(props: LocationsProps) {
    super(props);
    this.state = { mode: undefined };
  }

  componentWillMount() {
    this.props.locationsFetchData(this.props.url);
  }

  render() {
    if (this.props.location) {
      let { id, name, type, dimension, residents } = this.props.location;

      return (
        <div className="location card">
          <div className="card_header">
            <h2>Location: {name}</h2>
            <span>location id: {id}</span>
          </div>
          <div className="card_body">
            <CardElement name="Location type:" value={type} />
            <CardElement name="dimension:" value={dimension} />
            <CardElement
              name="amount of residents:"
              value={residents ? residents.length : 0}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    location: state.location.result,
    loading: state.location.loading
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    locationsFetchData: (url: string) => dispatch(locationsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
