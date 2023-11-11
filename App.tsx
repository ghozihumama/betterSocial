import React, {useReducer} from 'react';
import {Context} from './src/stores/context';
import {btsReducer} from './src/stores/reducer';
import {initialState} from './src/stores/state';
import MainNavigator from './src/navigations/MainNavigation';

function App() {
  const [state, dispatch] = useReducer(btsReducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>
      <MainNavigator />
    </Context.Provider>
  );
}

export default App;
