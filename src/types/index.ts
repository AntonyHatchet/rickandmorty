import { ThunkAction } from "redux-thunk";

import { CharactersState, CharacterAction } from "./characters";
import { LocationsState, LocationsAction } from "./locations";
import { EpisodesState, EpisodesAction } from "./episodes";

import { ModalState, ModalActions } from "./modals";

export type ReduxInitAction = { type: "@@INIT" };

export type State = CharactersState &
  EpisodesState &
  ModalState &
  LocationsState;

export type Actions =
  | ReduxInitAction
  | EpisodesAction
  | CharacterAction
  | ModalActions
  | LocationsAction;

export type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;
