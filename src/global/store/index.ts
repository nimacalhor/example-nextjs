import mediaReducer from "@media/store";
import settingReducer from "@setting/store";
import accountReducer from "@account/store";
import bookmarkReducer from "@bookmark/store";
import { configureStore } from "@reduxjs/toolkit";
import statusDetailsReducer from "@status-details/store";
import advancedSearchReducer from "@advanced-search/store";

const store = configureStore({
  devTools: true,
  reducer: {
    media: mediaReducer,
    account: accountReducer,
    setting: settingReducer,
    bookmark: bookmarkReducer,
    statusDetails: statusDetailsReducer,
    advancedSearch: advancedSearchReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
