import { Text, Id, Url } from "./base";

export enum ActionTypes {
  LOCATIONS_LOADED = "LOCATIONS_LOADED",
  LOCATIONS_LOADING = "LOCATIONS_LOADING",
  LOCATIONS_LOADED_ERROR = "LOCATIONS_LOADED_ERROR"
}

export type Location = {
  id?: Id;
  name: Text;
  type?: Text;
  dimension?: Text;
  residents?: Url[];
  url: Url;
  created?: Text;
};

export type LocationsState = {
  result: Location;
  loading: boolean;
  error: Text;
};

export type LocationsAction =
  | {
      type: ActionTypes.LOCATIONS_LOADED;
      location: Location;
      loading: boolean;
    }
  | { type: ActionTypes.LOCATIONS_LOADING; loading: boolean }
  | { type: ActionTypes.LOCATIONS_LOADED_ERROR; error: Text };
