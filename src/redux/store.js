// import { configureStore } from '@reduxjs/toolkit';
// // import { persistStore } from 'redux-persist';
// import persistStore from 'redux-persist/es/persistStore';
// import contactsReducer from './contactsSlice';
// // import { getDefaultMiddleware } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   // middleware: getDefaultMiddleware({
//   //   serializableCheck: false,
//   // }),
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);
