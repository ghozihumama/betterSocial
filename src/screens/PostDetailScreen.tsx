import React, {useContext} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/StackNavigator';
import {BtsSectionActions} from '../moleculs';
import {BtsImageIcon} from '../atoms';
import {btsImage} from '../assets';

type Props = NativeStackScreenProps<RootStackParamList, 'PostDetailScreen'>;

import {Context} from '../stores/context';

export const PostDetailScreen: React.FC<Props> = ({route, navigation}) => {
  const {state} = useContext(Context);
  const feedById = state.feeds.find(feed => feed.id === route.params.id);

  if (!feedById) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <View style={{marginBottom: 48}}>
        <View>
          {/* Header */}
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <BtsImageIcon
              isPressable
              onPress={() => navigation.goBack()}
              source={btsImage.back}
            />
            <Image
              source={{
                uri: route.params.imageProfileUrl,
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  lineHeight: 16.94,
                }}>
                {route.params.name}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                {route.params.createdAt}
              </Text>
            </View>
          </View>
          {/* Desc and Image */}
          <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
          <View>
            <Text style={{margin: 24}}>{route.params.description}</Text>
            <Image
              source={{
                uri: route.params.imageUrl,
              }}
              height={200}
            />
          </View>
          {/* Footer */}
          <BtsSectionActions
            feedId={feedById.id}
            comments={feedById.comments}
            downvote={feedById.downvote}
            upvote={feedById.upvote}
          />
        </View>
        <FlatList
          data={feedById ? feedById.comments : []}
          keyExtractor={(__, idx) => idx.toString()}
          renderItem={({index, item}) => (
            <React.Fragment key={index}>
              <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
              <View
                style={{
                  flexDirection: 'row',
                  minHeight: 72,
                  paddingVertical: 16,
                  paddingHorizontal: 24,
                }}>
                <Image
                  source={{
                    uri: item.imageProfileUrl,
                  }}
                  width={36}
                  height={36}
                  style={{borderRadius: 24, marginRight: 16}}
                />
                <View style={{width: '90%'}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 12,
                      lineHeight: 14.52,
                      color: '#828282',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 19.36,
                    }}>
                    {item.comment}
                  </Text>
                </View>
              </View>
            </React.Fragment>
          )}
        />
      </View>

      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput placeholder="Enter Comment" style={{flex: 1}} />
        <Button title="Comment" onPress={() => console.log('comment')} />
      </View>
    </SafeAreaView>
  );
};

export default PostDetailScreen;
