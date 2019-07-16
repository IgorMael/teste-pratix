import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};
const reducers = persistReducer(persistConfig, rootReducers);

const store = createStore(reducers, undefined, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
