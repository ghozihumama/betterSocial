import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {BtsImageIcon} from '../atoms';
import {btsImage} from '../assets';
import {CommentInterface} from '../stores/state';
import {ActionType} from '../stores/actions';
import {Context} from '../stores/context';

interface PropsSectionActions {
  comments: Array<CommentInterface>;
  feedId: number;
  downvote: Array<number>;
  upvote: Array<number>;
}

export const BtsSectionActions: React.FC<PropsSectionActions> = ({
  comments,
  feedId,
  downvote,
  upvote,
}) => {
  const {state, dispatch} = useContext(Context);
  return (
    <View
      style={{
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        <BtsImageIcon source={btsImage.share} />
        <BtsImageIcon source={btsImage.comment} />
        <Text
          style={{
            width: 24,
            marginHorizontal: 4,
            textAlign: 'center',
          }}>
          {Array.isArray(comments) ? comments.length : 0}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <BtsImageIcon source={btsImage.block} />
        <BtsImageIcon
          isPressable
          onPress={() =>
            dispatch({
              type: ActionType.Downvote,
              payload: {feedId, userId: state.user.id},
            })
          }
          source={
            Array.isArray(downvote) && downvote.includes(state.user.id)
              ? btsImage.downvoteActive
              : btsImage.downvoteInactive
          }
        />
        <Text
          style={{
            width: 24,
            marginHorizontal: 11,
            textAlign: 'center',
          }}>
          {Array.isArray(downvote) ? downvote.length : 0}
        </Text>
        <BtsImageIcon
          isPressable
          onPress={() =>
            dispatch({
              type: ActionType.Upvote,
              payload: {feedId, userId: state.user.id},
            })
          }
          source={
            Array.isArray(upvote) && upvote.includes(state.user.id)
              ? btsImage.upvoteActive
              : btsImage.upvoteInactive
          }
        />
        <Text
          style={{
            width: 24,
            marginHorizontal: 11,
            textAlign: 'center',
          }}>
          {Array.isArray(upvote) ? upvote.length : 0}
        </Text>
      </View>
    </View>
  );
};
