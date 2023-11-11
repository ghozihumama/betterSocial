import React, {useState} from 'react';
import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {btsImage} from '../assets';
import {BtsImageIcon, BtsReadMore} from '../atoms';
const MAX_NUM_OF_LINES = 3;

interface PropsPostingCard {
  imageProfileUrl: string;
  name: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  comments: Array<string>;
  downvote: Array<number>;
  upvote: Array<number>;
}
export const PostingCard: React.FC<PropsPostingCard> = ({
  imageProfileUrl,
  name,
  createdAt,
  description,
  imageUrl,
  comments,
  downvote,
  upvote,
}) => {
  const navigation = useNavigation();
  const [isTruncated, setIsTruncated] = useState(true);
  const [numberOfLine, setNumberOfLine] = useState<number>(1);

  return (
    <Pressable onPress={() => navigation.navigate('post-detail')}>
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
              onPress={() => console.log('downvote')}
              source={btsImage.downvoteInactive}
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
              onPress={() => console.log('upvote')}
              source={btsImage.upvoteInactive}
            />
            <Text
              style={{
                width: 24,
                marginHorizontal: 11,
                textAlign: 'center',
              }}>
              {Array.isArray(upvote) ? downvote.length : 0}
            </Text>
          </View>
        </View>
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
