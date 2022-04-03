import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/consts/COLORS";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={COLORS.darkgrey} />
      <TextInput style={styles.TextInput} placeholder="search for a car" />
      <MaterialCommunityIcons
        name="filter-variant-plus"
        size={24}
        color={COLORS.darkgrey}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 50,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    marginTop: 30,
    paddingHorizontal: 10,
  },
  TextInput: {
    width: "70%",
    color: COLORS.darkgrey,
  },
});
