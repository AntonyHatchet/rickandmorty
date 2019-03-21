import { Text, Id, Url } from "./base";

export enum ActionTypes {
  EPISODES_LOADED = "EPISODES_LOADED",
  EPISODES_LOADING = "EPISODES_LOADING",
  EPISODES_LOADED_ERROR = "EPISODES_LOADED_ERROR"
}

export type Episode = {
  id: Id;
  name: Text;
  air_date: Text;
  episode: Text;
  characters: Url[];
  url: Url;
  created: Text;
};

export type EpisodesState = {
  results: Map<Id, Episode>;
  loading: boolean;
  error: Text;
};

export type EpisodesAction =
  | {
      type: ActionTypes.EPISODES_LOADED;
      id: Id;
      episodes: Episode;
      loading: boolean;
    }
  | { type: ActionTypes.EPISODES_LOADING; loading: boolean }
  | { type: ActionTypes.EPISODES_LOADED_ERROR; error: Text };
