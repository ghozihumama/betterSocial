import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {PostingCard} from '../components';
import {feeds} from '../datas';

export const FeedScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={feeds}
        keyExtractor={index => index.id.toString()}
        renderItem={({index, item}) => (
          <PostingCard
            key={index}
            imageProfileUrl={item.imageProfileUrl}
            name={item.name}
            createdAt={item.createdAt}
            description={item.description}
            imageUrl={item.imageUrl}
            comments={item.comments}
            downvote={item.downvote}
            upvote={item.upvote}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
