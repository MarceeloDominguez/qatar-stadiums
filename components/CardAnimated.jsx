import React from "react";
import { Dimensions, Animated, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");
const IMAGE_WIDTH = width * 0.79;

export default function CardAnimated({ progress }) {
  return (
    <Animated.View
      style={[
        styles.viewCard,
        {
          transform: [
            { perspective: IMAGE_WIDTH * 4 },
            {
              rotateY: progress.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["0deg", "90deg", "180deg"],
              }),
            },
          ],
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  viewCard: {
    width: IMAGE_WIDTH + 40,
    backgroundColor: "#8a1538",
    borderRadius: 20,
    position: "absolute",
    zIndex: -1,
    bottom: 0,
    top: 40,
    left: 20,
  },
});
