import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Timer from './components/Timer';
import reducer from './reducer';

const store = createStore(reducer);

console.log(store);

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
