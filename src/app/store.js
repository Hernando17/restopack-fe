import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "js-cookie";

import { tableApi } from "../redux/services/tableApi";
import { authApi } from "../redux/services/authApi";

import userReducer from "../redux/features/userSlice";
import tokenReducer from "../redux/features/tokenSlice";

const userPersistConfig = {
  key: "user",
  storage,
};

const tokenPersistConfig = {
  key: "token",
  storage: new CookieStorage(Cookies),
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  token: persistReducer(tokenPersistConfig, tokenReducer),

  [authApi.reducerPath]: authApi.reducer,
  [tableApi.reducerPath]: tableApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(tableApi.middleware)
      .concat(authApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
