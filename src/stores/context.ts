import React from 'react';
import {InitialStateInterface, initialState} from './state';
import {BtsActions} from './actions';

export const Context = React.createContext<{
  state: InitialStateInterface;
  dispatch: React.Dispatch<BtsActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
