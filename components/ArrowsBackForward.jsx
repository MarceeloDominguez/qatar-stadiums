import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DATA } from "../data/data";

export default function ArrowsBackForward({ index, refProp, width, setIndex }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { opacity: index === 0 ? 0.4 : 1 }]}
        activeOpacity={0.5}
        disabled={index === 0}
        onPress={() => {
          refProp?.current?.scrollToOffset({
            offset: (index - 1) * width,
            animated: true,
          });
          setIndex(index - 1);
        }}
      >
        <Text style={styles.titleButton}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { opacity: index === DATA.length - 1 ? 0.4 : 1 },
        ]}
        activeOpacity={0.5}
        disabled={index === DATA.length - 1}
        onPress={() => {
          refProp?.current?.scrollToOffset({
            offset: (index + 1) * width,
            animated: true,
          });
          setIndex(index + 1);
        }}
      >
        <Text style={styles.titleButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: "#8a1538",
    borderRadius: 8,
    justifyContent: "center",
    elevation: 3,
  },
  titleButton: {
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: "#EDE4E0",
  },
});
