import React from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { User } from "../utils/types";
import { SPACING, AVATAR_SIZE } from "../constants";

type IProps = User & {
  scale: Animated.AnimatedInterpolation;
};

const Item: React.FC<IProps> = ({ name, jobTitle, email, image, scale }) => {
  return (
    <Animated.View style={{ ...styles.itemContainer, transform: [{ scale }] }}>
      <Image style={styles.avatar} source={{ uri: image }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </Animated.View>
  );
};

export default Item;

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
