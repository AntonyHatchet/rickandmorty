import { ReactNode } from "react";

export enum ActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL"
}

export type ModalState = {
  opened: boolean;
  children: ReactNode;
};

export type ModalActions =
  | {
      type: ActionTypes.SHOW_MODAL;
      opened: Boolean;
      children: ReactNode;
    }
  | {
      type: ActionTypes.HIDE_MODAL;
      opened: Boolean;
    };
