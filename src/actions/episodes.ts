import { Dispatch } from "redux";
import { fetchData } from "../services/fetchService";
import { ActionTypes, Episode } from "../types/episodes";

const episodesHasErrored = (error: any) => {
  return {
    type: ActionTypes.EPISODES_LOADED_ERROR,
    error
  };
};

const episodesIsLoading = (bool: boolean) => {
  return {
    type: ActionTypes.EPISODES_LOADING,
    loading: bool
  };
};

const episodesFetchDataSuccess = (episodes: Array<Episode>, id: number) => {
  return {
    type: ActionTypes.EPISODES_LOADED,
    episodes,
    id
  };
};

export const episodesFetchData = (urls: Array<string>, id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(episodesIsLoading(true));

    const promise = Promise.all(
      urls.map(async (url: string) => {
        return await fetch(url);
      })
    );

    promise
      .then(responses => {
        dispatch(episodesIsLoading(false));

        return Promise.all(responses.map(episode => episode.json()));
      })
      .then(episopdes => dispatch(episodesFetchDataSuccess(episopdes, id)))
      .catch(error => dispatch(episodesHasErrored(error)));
  };
};
