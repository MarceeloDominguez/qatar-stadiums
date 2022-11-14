import React from "react";
import { Image, Dimensions, Animated, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");
const IMAGE_WIDTH = width * 0.79;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;

export default function ListImages({ image, index, scrollX }) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [50, 0, 50],
  });

  return (
    <Animated.View
      style={[
        styles.containerImage,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Image
        source={{ uri: image.image }}
        resizeMode="cover"
        style={styles.image}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    width,
    paddingVertical: 20,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 5,
  },
});
