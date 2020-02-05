import * as Action from "../actions";

export default function Modal(state = [], action: any) {
  switch (action.type) {
    case Action.Store.Modal.OPEN:
      return [...state, action.data];
    case Action.Store.Modal.CLOSE:
      return [...state.slice(0, -1)];
    case Action.Store.Modal.CLOSE_ALL:
      return [];
    default:
      return state;
  }
}
