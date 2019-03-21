import { Dispatch } from "redux";
import { fetchData } from "../services/fetchService";
import { ActionTypes, AllCharactersFetchData } from "../types/characters";

const charactersHasErrored = (error: any) => {
  return {
    type: ActionTypes.CHARACTERS_LOADED_ERROR,
    error
  };
};

const charactersIsLoading = (bool: boolean) => {
  return {
    type: ActionTypes.CHARACTERS_LOADING,
    loading: bool
  };
};

const charactersFetchDataSuccess = (characters: AllCharactersFetchData) => {
  return {
    type: ActionTypes.CHARACTERS_LOADED,
    characters: characters.results
  };
};

export const charactersFetchData = (url: string) => {
  return (dispatch: Dispatch) => {
    dispatch(charactersIsLoading(true));

    fetchData(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(charactersIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(charactersFetchDataSuccess(items)))
      .catch(error => dispatch(charactersHasErrored(error)));
  };
};
