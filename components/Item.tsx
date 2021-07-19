import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { User } from "../utils/types";
import { SPACING, AVATAR_SIZE } from "../constants";

const Item: React.FC<User> = ({ name, jobTitle, email, image }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.avatar} source={{ uri: image }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
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
