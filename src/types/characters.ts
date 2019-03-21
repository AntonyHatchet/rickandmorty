import { Text, Id, Url } from "./base";
import { Location } from "./locations";
import { Episode } from "./episodes";

export enum ActionTypes {
  CHARACTERS_LOADED = "CHARACTERS_LOADED",
  CHARACTERS_LOADING = "CHARACTERS_LOADING",
  CHARACTERS_LOADED_ERROR = "CHARACTERS_LOADED_ERROR"
}

export type AllCharactersFetchData = {
  info: {
    count: number;
    next: Url;
    pages: number;
    prev: Url;
  };
  results: Characters;
};

export type Character = {
  id: Id;
  name: Text;
  status: Text;
  species: Text;
  type: Text;
  gender: Text;
  origin: CharacterOrigin;
  location: Location;
  image: Url;
  episode: Episode[];
  url: Url;
  created: Text;
};

export type CharacterOrigin = {
  name: Text;
  url: Url;
};

export type Characters = Array<Character>;

export type CharactersState = {
  results: Characters;
  loading: boolean;
  error: Text;
  loadCharacters: Function;
};

export type CharacterAction =
  | { type: "CHARACTERS_LOADED"; characters: Characters; loading: boolean }
  | { type: "CHARACTERS_LOADING"; loading: boolean }
  | { type: "CHARACTERS_LOADED_ERROR"; error: Text };
