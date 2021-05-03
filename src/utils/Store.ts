import { combineReducers, configureStore } from "@reduxjs/toolkit";

import * as Reducers from "@reducers/index";

const store = configureStore({
  reducer: combineReducers(Reducers),
  devTools: true,
});

const dispatch = (action: any) => store.dispatch(action);
const state = () => store.getState();
export { store as Store, dispatch as useDispatch, state as useState };
