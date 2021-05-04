import * as Action from "@actions/index";

export default (state: unknown[] = [], action: { type: string; data: unknown }): unknown => {
  switch (action.type) {
    case Action.Modal.OPEN:
      return [...state, action.data];
    case Action.Modal.CLOSE:
      return [...state.slice(0, -1)];
    case Action.Modal.CLOSE_ALL:
      return [];
    default:
      return state;
  }
};
