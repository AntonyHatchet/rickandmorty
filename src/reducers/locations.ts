import { LocationsState, ActionTypes, Location } from "../types/locations";
import { Actions } from "../types";

const RootState: LocationsState = {
  result: {} as Location,
  error: "",
  loading: false
};

const characters = (
  state: LocationsState = RootState,
  action: Actions
): LocationsState => {
  switch (action.type) {
    case ActionTypes.LOCATIONS_LOADING:
      return { ...state, result: {} as Location, loading: true };
    case ActionTypes.LOCATIONS_LOADED:
      return {
        result: { ...action.location },
        loading: false,
        error: ""
      };
    case ActionTypes.LOCATIONS_LOADED_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default characters;
