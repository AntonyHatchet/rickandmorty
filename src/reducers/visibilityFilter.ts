import { VisibilityFilter } from "../types/visibilityFilter";
import { Actions } from "../types";

const visibilityFilter = (
  state: VisibilityFilter = {
    statusFilter: "SHOW_ALL",
    genderFilter: "SHOW_ALL"
  },
  action: Actions
): VisibilityFilter => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return { ...action.filter };
    default:
      return state;
  }
};

export default visibilityFilter;
