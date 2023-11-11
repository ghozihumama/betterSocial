import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import type {RootStackParamList} from './StackNavigator';
import {FeedInterface} from '../stores/state';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

/** => navigate to detail transaction */
const navigateToPostDetailScreen = (params: FeedInterface) => {
  navigationRef.current?.navigate('PostDetailScreen', params);
};

/** => back to previews page */
const back = () => {
  navigationRef.current?.goBack();
};

export const NavigationAction = {
  navigateToPostDetailScreen,
  back,
};
