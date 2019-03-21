import { Dispatch } from "redux";
import { ReactNode } from "react";
import { ActionTypes } from "../types/modals";

export const showModal = (children: ReactNode) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.SHOW_MODAL,
    children
  });
};

export const hideModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.HIDE_MODAL
  });
};
