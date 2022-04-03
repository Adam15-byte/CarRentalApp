import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { ParametersIcons } from "../../assets/images/ParametersIcons";
import { COLORS } from "../../assets/consts/COLORS";
import React, { useEffect } from "react";

const CarParametersBarList = ({
  seats,
  engine,
  power,
  maxSpeed,
  toHundred,
  gear,
}) => {
  const StatTitle = ({ index }) => (
    <Text style={styles.statTitle}>
      {index === 0 && "Engine"}
      {index === 1 && "Power"}
      {index === 2 && "0-100"}
      {index === 3 && "Seats"}
      {index === 4 && "Gear"}
      {index === 5 && "Max speed"}
    </Text>
  );
  const StatValue = ({ index, seats }) => (
    <Text style={styles.valueText}>
      {index === 0 && engine}
      {index === 1 && power}
      {index === 2 && toHundred}
      {index === 3 && seats}
      {index === 4 && gear}
      {index === 5 && maxSpeed}
    </Text>
  );
  const renderStatsList = ({ item, index }) => (
    <View
      style={[
        styles.logoContainer,
        {
          backgroundColor: COLORS.white,
          marginLeft: index === 0 ? 30 : 12,
        },
      ]}
    >
      <Image source={{ uri: item }} style={styles.image} />
      <StatTitle index={index} />
      <StatValue index={index} seats={seats} />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={ParametersIcons}
        keyExtractor={(_, index) => index}
        renderItem={renderStatsList}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CarParametersBarList;

const styles = StyleSheet.create({
  container: {
    minHeight: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    height: 140,
    width: 100,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    top: 5,
    alignSelf: "center",
  },
  statTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 15,
    textAlign: "center",
  },
  valueText: {
    position: "absolute",
    bottom: 20,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
});
