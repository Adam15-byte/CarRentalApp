import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../assets/consts/COLORS";

const PriceTag = ({ price = 400 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>$ {price} / day</Text>
    </View>
  );
};

export default PriceTag;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    right: 20,
    minWidth: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
    zIndex: 999,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    fontWeight: "600",
    fontSize: 14,
    color: COLORS.white,
  },
});
