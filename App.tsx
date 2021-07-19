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
import { BG_IMG } from "./constants";
import Item from "./components/Item";

type AppProps = {
  users: User[];
};

const App: React.FC<AppProps> = () => {
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
        renderItem={({ item, index }) => <Item {...item} />}
      />
    </SafeAreaView>
  );
};
export default App;
