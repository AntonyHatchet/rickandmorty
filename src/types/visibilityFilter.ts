export type VisibilityFilter = {
  statusFilter: StatusFilter;
  genderFilter: GenderFilter;
};

export type StatusFilter =
  | "SHOW_ALL"
  | "SHOW_ALIVE"
  | "SHOW_DEAD"
  | "SHOW_UNKNOWN";

export type GenderFilter =
  | "SHOW_ALL"
  | "SHOW_FEMALE"
  | "SHOW_MALE"
  | "SHOW_GENDERLESS"
  | "SHOW_UNKNOWN";

export type VisibilityFilterState = {
  visibilityFilter: VisibilityFilter;
};

export type VisibilityFilterAction = {
  type: "SET_VISIBILITY_FILTER";
  filter: VisibilityFilter;
};
