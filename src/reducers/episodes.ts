import { EpisodesState, ActionTypes, Episode } from "../types/episodes";
import { Actions } from "../types";

const RootState: EpisodesState = {
  results: new Map(),
  error: "",
  loading: false
};

const characters = (
  state: EpisodesState = RootState,
  action: Actions
): EpisodesState => {
  switch (action.type) {
    case ActionTypes.EPISODES_LOADING:
      return { ...state, loading: true };
    case ActionTypes.EPISODES_LOADED:
      let newMap = new Map(state.results);
      newMap.set(action.id, action.episodes);
      return {
        results: newMap,
        loading: false,
        error: ""
      };
    case ActionTypes.EPISODES_LOADED_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default characters;
