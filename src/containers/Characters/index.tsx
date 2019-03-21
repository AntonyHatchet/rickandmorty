import * as React from "react";

import { connect } from "react-redux";
import { charactersFetchData } from "../../actions/characters";
import CharactersList from "../../components/CharactersList";

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

  fetchData = () => {
    this.props.loadCharacters(
      `https://rickandmortyapi.com/api/character/?page=${Math.round(
        Math.random() * (26 - 1) + 1
      )}`
    );
  };

  componentWillMount() {
    this.fetchData();
  }

  render() {
    let { results } = this.props;

    if (results) {
      return <CharactersList characters={results} />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    results: state.characters.results,
    error: state.characters.error,
    loading: state.characters.loading
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loadCharacters: (url: string) => dispatch(charactersFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
