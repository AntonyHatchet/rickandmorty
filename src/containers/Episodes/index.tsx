import * as React from "react";
import { connect } from "react-redux";

import CardElement from "../../components/CardElement";
import { episodesFetchData } from "../../actions/episodes";
import { Episode } from "../../types/episodes";

import "./style.scss";

class Episodes extends React.Component<any, any> {
  componentWillMount() {
    const { urls, id } = this.props;
    this.props.episodesFetchData(urls, id);
  }

  render() {
    const { episodes, loading, id } = this.props;

    if (episodes && episodes.has(id)) {
      const data = episodes.get(id);
      return (
        <div className="episodes card">
          <div className="card_header">
            <h3>Episodes</h3>
          </div>
          <div className="card_body">
            {data.map((episode: Episode) => (
              <CardElement
                key={episode.id}
                name={episode.episode}
                value={episode.name}
              />
            ))}
          </div>
        </div>
      );
    } else if (loading) {
      return "Fetching episodes data";
    } else {
      return "Error on fetching data";
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    episodes: state.episodes.results,
    loading: state.episodes.loading
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    episodesFetchData: (urls: Array<string>, id: number) =>
      dispatch(episodesFetchData(urls, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episodes);
