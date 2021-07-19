import * as React from "react";
import {
  StatusBar,
  Image,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
  ListRenderItem,
} from "react-native";
const { width, height } = Dimensions.get("screen");

import { DATA } from "./data";
import { User } from "./utils/types";
import { BG_IMG, ITEM_SIZE } from "./constants";
import Item from "./components/Item";

type AppProps = {
  users: User[];
};

const App: React.FC<AppProps> = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={50}
      />
      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return <Item {...item} scale={scale} />;
        }}
      />
    </SafeAreaView>
  );
};
export default App;
