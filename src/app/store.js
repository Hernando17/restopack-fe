import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tableApi } from "../redux/services/tableApi";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "../redux/features/userSlice";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),

  [tableApi.reducerPath]: tableApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(tableApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
