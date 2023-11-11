import React, {useState} from 'react';
import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import {BtsReadMore} from '../atoms';
import {CommentInterface} from '../stores/state';
import {NavigationAction} from '../navigations/RootNavigation';
import {BtsSectionActions} from '../moleculs';
const MAX_NUM_OF_LINES = 3;

interface PropsPostingCard {
  id: number;
  imageProfileUrl: string;
  name: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  comments: Array<CommentInterface>;
  downvote: Array<number>;
  upvote: Array<number>;
}
export const PostingCard: React.FC<PropsPostingCard> = ({
  id,
  imageProfileUrl,
  name,
  createdAt,
  description,
  imageUrl,
  comments,
  downvote,
  upvote,
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [numberOfLine, setNumberOfLine] = useState<number>(1);

  return (
    <Pressable
      onPress={() =>
        NavigationAction.navigateToPostDetailScreen({
          id,
          imageProfileUrl,
          name,
          createdAt,
          description,
          imageUrl,
          comments,
          downvote,
          upvote,
        })
      }>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: imageProfileUrl,
            }}
            width={48}
            height={48}
            style={styles.avatar}
          />
          <View style={styles.sectionLeftHeader}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{createdAt}</Text>
          </View>
        </View>
        <View style={styles.headerDivider} />
        <View>
          <Text
            onTextLayout={({nativeEvent}) =>
              setNumberOfLine(nativeEvent?.lines?.length ?? 1)
            }
            numberOfLines={
              isTruncated ? MAX_NUM_OF_LINES : Number.MAX_SAFE_INTEGER
            }
            style={{marginHorizontal: 24, marginTop: 24}}>
            {description}
          </Text>
          {MAX_NUM_OF_LINES < numberOfLine ? (
            <View style={{marginHorizontal: 24, marginBottom: 24}}>
              <BtsReadMore
                onPress={() => setIsTruncated(!isTruncated)}
                isReadMore={isTruncated}
              />
            </View>
          ) : null}
          <Image
            source={{
              uri: imageUrl,
            }}
            height={200}
          />
        </View>
        <BtsSectionActions
          comments={comments}
          downvote={downvote}
          feedId={id}
          upvote={upvote}
        />
      </View>
      <View style={styles.divider} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {borderRadius: 24, marginLeft: 24},
  sectionLeftHeader: {
    marginLeft: 16,
  },
  name: {fontWeight: '600', fontSize: 14, lineHeight: 16.94},
  date: {fontWeight: '400', fontSize: 12, lineHeight: 18},
  headerDivider: {height: 0.5, backgroundColor: '#C4C4C4'},
  divider: {height: 4, backgroundColor: '#C4C4C4'},
});
