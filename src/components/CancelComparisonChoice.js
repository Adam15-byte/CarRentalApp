import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../assets/consts/COLORS";

const CancelComparisonChoice = ({ onPress: onPress }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress();
      }}
    >
      <View style={styles.backButton}>
        <Entypo name="cross" size={18} color={COLORS.black} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CancelComparisonChoice;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    zIndex: 999,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
