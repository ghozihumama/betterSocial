import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {PostingCard} from '../components';

export const FeedScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PostingCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
