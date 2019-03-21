import { ModalState, ActionTypes } from "../types/modals";
import { Actions } from "../types";

const RootState: ModalState = {
  children: null,
  opened: false
};

const modals = (state: ModalState = RootState, action: Actions): ModalState => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      console.log("SHOW MODAL");
      return { opened: true, children: action.children };
    case ActionTypes.HIDE_MODAL:
      return {
        ...state,
        opened: false
      };
    default:
      return state;
  }
};

export default modals;
