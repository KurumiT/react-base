import { combineReducers, configureStore } from "@reduxjs/toolkit";

import * as Reducers from "@reducers/index";

const store = configureStore({
  reducer: combineReducers(Reducers),
  devTools: true,
});

const dispatch = (action: { type: string; data?: unknown }): unknown => store.dispatch(action);
const state = (): unknown => store.getState();
export { store as Store, dispatch as useDispatch, state as useState };
