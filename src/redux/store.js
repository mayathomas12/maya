import { configureStore } from '@reduxjs/toolkit';  
import { persistStore, persistReducer } from 'redux-persist';  
import storage from 'redux-persist/lib/storage';  
import userReducer from './state';  

const persistConfig = {  
  key: "root",  
  version: 1,  
  storage,  
};  

const persistedReducer = persistReducer(persistConfig, userReducer);  

export const store = configureStore({  
  reducer: persistedReducer,  
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware({  
      serializableCheck: {  
        ignoredActions: ['persist/FLUSH', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PERSIST', 'persist/PURGE', 'persist/REGISTER'],  
      },  
    }),  
});  

export const persistor = persistStore(store);