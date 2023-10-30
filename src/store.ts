import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from './features/items/ItemsSlice'



const store = configureStore({
    reducer: { 
      items: itemsReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    //preloadedState,
    //enhancers: [batchedSubscribe(debounceNotify)],
});

export function setupStore() {
  return store
}
 
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>

export default store