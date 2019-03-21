import { CharactersState, ActionTypes } from "../types/characters";
import { Actions } from "../types";

const RootState: CharactersState = {
  results: [],
  error: "",
  loading: false,
  loadCharacters: () => {}
};

const characters = (
  state: CharactersState = RootState,
  action: Actions
): CharactersState => {
  switch (action.type) {
    case ActionTypes.CHARACTERS_LOADING:
      return { ...state, loading: true };
    case ActionTypes.CHARACTERS_LOADED:
      return {
        ...state,
        results: [...action.characters],
        loading: false,
        error: ""
      };
    case ActionTypes.CHARACTERS_LOADED_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default characters;
