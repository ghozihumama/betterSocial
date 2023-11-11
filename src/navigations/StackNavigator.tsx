import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedScreen, PostDetailScreen} from '../screens';
import {FeedInterface} from '../stores/state';

export type RootStackParamList = {
  FeedScreen: undefined;
  PostDetailScreen: FeedInterface;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="FeedScreen">
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait',
        }}
      />
      <Stack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
