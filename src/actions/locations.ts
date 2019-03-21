import { Dispatch } from "redux";
import { fetchData } from "../services/fetchService";
import { ActionTypes, Location } from "../types/locations";

const locationsHasErrored = (error: any) => {
  return {
    type: ActionTypes.LOCATIONS_LOADED_ERROR,
    error
  };
};

const locationsIsLoading = (bool: boolean) => {
  return {
    type: ActionTypes.LOCATIONS_LOADING,
    loading: bool
  };
};

const locationsFetchDataSuccess = (location: Location) => {
  return {
    type: ActionTypes.LOCATIONS_LOADED,
    location
  };
};

export const locationsFetchData = (url: string) => {
  return (dispatch: Dispatch) => {
    dispatch(locationsIsLoading(true));

    fetchData(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(locationsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(locationsFetchDataSuccess(items)))
      .catch(error => dispatch(locationsHasErrored(error)));
  };
};
