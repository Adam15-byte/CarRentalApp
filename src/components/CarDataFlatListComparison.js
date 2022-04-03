import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext } from "react";
import { CarData } from "../../assets/data/CarData";
import { COLORS } from "../../assets/consts/COLORS";
import { FontAwesome } from "@expo/vector-icons";
import { ComparisonCarService } from "../service/ComparisonCarService";

const CarDataFlatListComparison = () => {
  const { addNewCarForComparison } = useContext(ComparisonCarService);
  const renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback onPress={() => addNewCarForComparison(item)}>
      <View
        style={[styles.mainContainer, { marginLeft: index === 0 ? 30 : 0 }]}
      >
        <Image
          resizeMode="contain"
          source={{ uri: item.stats.image[0] }}
          style={styles.image}
        />
        <Text style={styles.nameText}>{item.stats.name}</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={12} color={COLORS.black} />
            <Text style={styles.ratingText}>
              {(Math.random() * (4 - 4 + 1) + 4).toFixed(1)}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>$ {item.stats.price}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={CarData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
      />
    </View>
  );
};

export default CarDataFlatListComparison;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 40,
  },
  mainContainer: {
    width: 200,
    height: 180,
    backgroundColor: COLORS.white,
    marginHorizontal: 35,
    borderRadius: 15,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    top: -50,
  },
  priceContainer: {
    alignSelf: "flex-end",
    backgroundColor: COLORS.yellow,
    width: "70%",
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    height: 50,
    marginTop: "auto",
  },
  priceText: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: 3,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1.3,
    bottom: 100,
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.black,
  },
});
