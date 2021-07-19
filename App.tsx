import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
  ListRenderItem,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import faker from "faker";
import { useState } from "react";

type User = {
  key: string;
  image: string;
  name: string;
  jobTitle: string;
  email: string;
};

type AppProps = {
  users: User[];
};

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

const App: React.FC<AppProps> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.avatar} source={{ uri: item.image }} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.jobTitle}>{item.jobTitle}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: SPACING / 2,
    margin: SPACING,
    marginVertical: SPACING / 2,
    backgroundColor: "lightgray",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
  },
  jobTitle: {
    fontSize: 15,
    opacity: 0.7,
  },
  email: {
    fontSize: 14,
    opacity: 0.8,
    color: "#0099cc",
  },
});
