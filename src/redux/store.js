import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import contactsReducer from './ContactsSlice';
import filterReducer from './FilterSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';

// import contactsReducer from './ContactsSlice';
// import { filterReducer } from './FilterSlice';
// import authReducer from './auth/auth-slice';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // аналог localStorage
// import storage from 'redux-persist/lib/storage';

// import { contactsReducer } from './ContactsSlice';
// import { filterReducer } from './FilterSlice';
// import { authReducer } from './auth/auth-slice';

// // налаштування для redux-persist (localStorage)
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// // store - містить повний стан програми, методи доступу до стану та відправлення екшенів. У програмі може бути лише один стор. Для створення стора є функція createStore(), яка приймає кілька параметрів та повертає новий об'єкт стора.

// // Redux Toolkit надає функцію configureStore(options), яка обертає оригінальний createStore(), єдиним аргументом очікує об'єкт параметрів та налаштовує деякі корисні інструменти розробки як частина процесу створення стора.
// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },

//   // окрема властивість middleware, яка є ф-єю фільтратором для localStorage між відправкою actions and reduser
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// //При проектуванні структура стану Redux ділиться на слайси (slice, частина), за кожен із яких відповідає окремий редюсер. У нашому додатку планувальника задач є два слайси - contacts та filter.
// // Для кожного слайсу створюється стандартний набір сутностей: типи екшенів, генератори екшенів та редюсер. Редюсери визначають початковий стан слайсу, список екшенів, що впливають на нього та операції оновлення стану.

// // створюємо persistor для нашого store
// export const persistor = persistStore(store);

// // console.log('store', store);
