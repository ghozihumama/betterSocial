import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedScreen, PostDetailScreen} from './src/screens';
import {Context} from './src/stores/context';
import {btsReducer} from './src/stores/reducer';
import {initialState} from './src/stores/state';

const Stack = createNativeStackNavigator();

function App() {
  const [state, dispatch] = useReducer(btsReducer, initialState);
  return (
    <Context.Provider value={{state, dispatch}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="feed">
          <Stack.Screen
            name="feed"
            component={FeedScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="post-detail"
            component={PostDetailScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

export default App;
