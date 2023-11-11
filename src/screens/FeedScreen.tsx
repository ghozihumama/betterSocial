import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {PostingCard} from '../components';
import {Context} from '../stores/context';

export const FeedScreen: React.FC = () => {
  const {state} = useContext(Context);
  return (
    <SafeAreaView>
      <FlatList
        data={Array.isArray(state.feeds) ? state.feeds : []}
        keyExtractor={index => index.id.toString()}
        renderItem={({index, item}) => (
          <PostingCard
            key={index}
            id={item.id}
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
