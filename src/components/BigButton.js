import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../assets/consts/COLORS";

const BigButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.buttonView}>
      <Text style={styles.buttonText}>RENT</Text>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  buttonView: {
    width: 350,
    height: 40,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonText: {
    letterSpacing: 2,
    fontSize: 19,
    fontWeight: "800",
    color: COLORS.white,
  },
});
