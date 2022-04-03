import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext } from "react";
import { LogoArray } from "../../assets/data/logosArray";
import { COLORS } from "../../assets/consts/COLORS";
import { MaterialIcons } from "@expo/vector-icons";
import { FilteringService } from "../service/FilteringService";

const LogosBar = () => {
  const { clearFilterIndex, changeFilterIndex, filterIndex } =
    useContext(FilteringService);
  const renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback
      onPress={() => {
        changeFilterIndex(index);
      }}
    >
      <View
        style={[
          styles.logoContainer,
          {
            backgroundColor:
              filterIndex === index ? COLORS.yellow : COLORS.white,
          },
        ]}
      >
        <Image style={styles.image} source={item.image} resizeMode="contain" />
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor:
                filterIndex === index ? COLORS.white : COLORS.darkgrey,
            },
          ]}
        >
          <MaterialIcons
            name="keyboard-arrow-right"
            size={18}
            color={filterIndex === index ? COLORS.black : COLORS.white}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={LogoArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default LogosBar;

const styles = StyleSheet.create({
  container: { height: 200, alignItems: "center", justifyContent: "center" },
  logoContainer: {
    height: 140,
    width: 70,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: { width: "90%", height: "90%", marginTop: -10 },
  iconContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
