import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { COLORS } from "../../assets/consts/COLORS";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View style={styles.backButton}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={20}
          color={COLORS.black}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 30,
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
