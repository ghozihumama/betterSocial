import React from 'react';
import {Image, ImageProps, StyleSheet, Pressable} from 'react-native';

interface PropsImageIcon {
  source: ImageProps;
  height?: number;
  width?: number;
  ratio?: number;
  isPressable?: boolean;
  onPress?: () => void;
}

export const BtsImageIcon: React.FC<PropsImageIcon> = ({
  source,
  height = 18,
  width = 18,
  ratio = 1,
  isPressable,
  onPress,
}) => {
  if (isPressable) {
    return (
      <Pressable onPress={onPress}>
        <BtsImageIcon source={source} />
      </Pressable>
    );
  }
  return (
    <Image
      source={source}
      height={height}
      width={width}
      style={[
        styles.image,
        {
          aspectRatio: ratio,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 22,
  },
});
