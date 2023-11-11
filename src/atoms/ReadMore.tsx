import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface PropsReadMore {
  onPress: () => void;
  isReadMore: boolean;
}

export const BtsReadMore: React.FC<PropsReadMore> = ({onPress, isReadMore}) => {
  return (
    <Text onPress={onPress} style={styles.textColor}>
      {isReadMore ? 'Read more' : ' Read less'}
    </Text>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: 'blue',
  },
});
