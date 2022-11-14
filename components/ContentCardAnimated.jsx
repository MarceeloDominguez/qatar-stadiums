import React from "react";
import { View, Text, Dimensions, Animated, StyleSheet } from "react-native";
import { DATA } from "../data/data";

const { width } = Dimensions.get("screen");
const IMAGE_WIDTH = width * 0.79;

export default function ContentCardAnimated({ scrollX }) {
  return (
    <View style={styles.containerContent}>
      {DATA.map((item, index) => {
        const inputRange = [
          (index - 0.2) * width,
          index * width,
          (index + 0.2) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        const rotateY = scrollX.interpolate({
          inputRange,
          outputRange: ["-45deg", "0deg", "45deg"],
        });
        return (
          <Animated.View
            style={{
              position: "absolute",
              opacity,
              transform: [{ perspective: IMAGE_WIDTH * 4 }, { rotateY }],
            }}
            key={item.id}
          >
            <Text style={styles.nameStadium}>{item.name}</Text>
            <Text style={styles.capacityStadium}>
              capacity: {item.capacity}
            </Text>
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    width: IMAGE_WIDTH,
    alignItems: "center",
    marginLeft: 40,
    zIndex: 99,
  },
  nameStadium: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    color: "#EDE4E0",
  },
  capacityStadium: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "700",
    color: "#EDE4E0",
    marginTop: 5,
    textTransform: "capitalize",
  },
});
