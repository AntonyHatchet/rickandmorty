import { Dispatch as ReduxDispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { CharactersState, CharacterAction } from "./characters";
import { LocationsState, LocationsAction } from "./locations";
import {
  VisibilityFilterState,
  VisibilityFilterAction
} from "./visibilityFilter";
import { ModalState, ModalActions } from "./modals";

export type ReduxInitAction = { type: "@@INIT" };

export type State = CharactersState &
  VisibilityFilterState &
  ModalState &
  LocationsState;

export type Actions =
  | ReduxInitAction
  | VisibilityFilterAction
  | CharacterAction
  | ModalActions
  | LocationsAction;

export type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;
