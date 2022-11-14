import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ArrowsBackForward from "./components/ArrowsBackForward";
import CardAnimated from "./components/CardAnimated";
import ContentCardAnimated from "./components/ContentCardAnimated";
import ListImages from "./components/ListImages";
import { DATA } from "./data/data";

const { width } = Dimensions.get("screen");
const IMAGE_WIDTH = width * 0.79;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;

export default function App() {
  const [index, setIndex] = useState(0);
  const ref = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const progress = Animated.modulo(Animated.divide(scrollX, width), width);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#691a40" />
      <Text style={styles.title}>qatar stadiums</Text>
      <View style={styles.contentFlatlist}>
        <Animated.FlatList
          data={DATA}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          //arrow back next
          ref={ref}
          onMomentumScrollEnd={(e) => {
            setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
          }}
          style={styles.flexGrowFlatList}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item, index }) => (
            <ListImages image={item} index={index} scrollX={scrollX} />
          )}
        />
        <CardAnimated progress={progress} />
        <ContentCardAnimated scrollX={scrollX} />
      </View>
      <ArrowsBackForward
        index={index}
        refProp={ref}
        width={width}
        setIndex={setIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#691a40",
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 25,
    color: "#EDE4E0",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  contentFlatlist: {
    height: IMAGE_HEIGHT * 2,
  },
  contentContainerStyle: {
    paddingHorizontal: 40,
    height: IMAGE_HEIGHT + 80,
  },
  flexGrowFlatList: {
    flexGrow: 0,
    zIndex: 9999,
  },
});
