import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useContext } from "react";
import { COLORS } from "../../assets/consts/COLORS";
import PriceTag from "../components/PriceTag";
import BackButton from "../components/BackButton";
import { CarData } from "../../assets/data/CarData";
import PriceTagBottomLeft from "../components/PriceTagBottomLeft";
import CancelComparisonChoice from "../components/CancelComparisonChoice";
import { ParametersIcons } from "../../assets/images/ParametersIcons";
import { ComparisonCarService } from "../service/ComparisonCarService";
import CarDataFlatListComparison from "../components/CarDataFlatListComparison";

const CompareScreen = ({ route }) => {
  const { comparisonCar, clearSelectedCar } = useContext(ComparisonCarService);
  const { key: key1, stats: stats1, type: type1 } = route.params.route.params;
  const {
    engine: engine1,
    gear: gear1,
    image: image1,
    maxSpeed: maxSpeed1,
    name: name1,
    power: power1,
    price: price1,
    seats: seats1,
    toHundred: toHundred1,
  } = stats1;
  const IconName = ({ index }) => {
    if (index === 0) {
      return "Engine";
    } else if (index === 1) {
      return "Power";
    } else if (index === 2) {
      return "0-100";
    } else if (index === 3) {
      return "Seats";
    } else if (index === 4) {
      return "Gears";
    } else {
      return "Max Speed";
    }
  };
  const LeftValue = ({ index = 0 }) => {
    if (index === 0) {
      return engine1;
    } else if (index === 1) {
      return power1;
    } else if (index === 2) {
      return toHundred1 + " sec";
    } else if (index === 3) {
      return seats1;
    } else if (index === 4) {
      return gear1;
    } else {
      return maxSpeed1 + " km/h";
    }
  };
  const RightValue = ({ index = 0 }) => {
    if (index === 0) {
      return comparisonCar?.stats?.engine;
    } else if (index === 1) {
      return comparisonCar?.stats?.power;
    } else if (index === 2) {
      return comparisonCar?.stats?.toHundred + " sec";
    } else if (index === 3) {
      return comparisonCar?.stats?.seats;
    } else if (index === 4) {
      return comparisonCar?.stats?.gear;
    } else {
      return comparisonCar?.stats?.maxSpeed + " km/h";
    }
  };
  return (
    <View style={styles.screenContainer}>
      {/* View to fill out the colors of leftover corners from borderRadiuses */}
      <View style={styles.topWhiteFilling} />
      <View style={styles.bottomGreyFilling} />
      <View style={styles.topCarContainer}>
        <Text style={styles.name1Text}>{name1}</Text>
        <Image
          source={{ uri: image1[0] }}
          style={styles.carTopImage1}
          resizeMode="contain"
        />
        <BackButton />
        <PriceTag price={price1} />
      </View>
      <View style={styles.middleComparisonsContainer}>
        <View style={styles.middleIconsContainer}>
          {ParametersIcons.map((item, index) => (
            <View
              key={`iconContainerView-${index}`}
              style={[
                styles.parameterIconContainerCell,
                {
                  backgroundColor: index % 2 === 0 ? COLORS.white : COLORS.grey,
                },
              ]}
            >
              <Image source={{ uri: item }} style={styles.iconImage} />
              <Text style={styles.middleTextParameterName}>
                <IconName index={index} />
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.leftRightParametersValuesContainer}>
          <View style={styles.leftColumnValues}>
            {ParametersIcons.map((item, index) => (
              <View key={`leftValueView-${index}`} style={styles.leftCell}>
                <Text style={styles.leftParameterValueText}>
                  <LeftValue index={index} />
                </Text>
              </View>
            ))}
          </View>
          {comparisonCar ? (
            <View style={styles.rightColumnValues}>
              {ParametersIcons.map((item, index) => (
                <View key={`rightValueView-${index}`} style={styles.rightCell}>
                  <Text style={styles.rightParameterValueText}>
                    <RightValue index={index} />
                  </Text>
                </View>
              ))}
            </View>
          ) : null}
        </View>
        <View style={styles.leftColumn} />
        <View style={styles.rightColumn} />
      </View>
      <View style={styles.bottomCarContainer}>
        {comparisonCar ? (
          <>
            <Image
              style={styles.carBottomImage2}
              source={{ uri: comparisonCar?.stats?.image[0] }}
              resizeMode="contain"
            />
            <Text style={styles.name2Text}>{comparisonCar?.stats?.name}</Text>
            <PriceTagBottomLeft price={comparisonCar?.stats?.price} />
            <CancelComparisonChoice onPress={clearSelectedCar} />
          </>
        ) : (
          <CarDataFlatListComparison />
        )}
      </View>
    </View>
  );
};

export default CompareScreen;

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    height: "100%",
  },
  topCarContainer: {
    width: "100%",
    height: "30%",
    top: 0,
    backgroundColor: COLORS.white,
  },
  carTopImage1: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    top: 20,
  },
  name1Text: {
    textAlign: "center",
    zIndex: 999,
    top: 62,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1.3,
  },
  middleComparisonsContainer: {
    width: "100%",
    flexDirection: "row",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomCarContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: COLORS.grey,
  },
  leftColumn: {
    height: "100%",
    width: "50%",
    left: 0,
    backgroundColor: COLORS.white,
    borderBottomRightRadius: 25,
  },
  rightColumn: {
    height: "100%",
    width: "50%",
    right: 0,
    backgroundColor: COLORS.grey,
    borderTopLeftRadius: 25,
  },
  topWhiteFilling: {
    position: "absolute",
    backgroundColor: COLORS.white,
    width: "100%",
    height: "50%",
  },
  bottomGreyFilling: {
    position: "absolute",
    backgroundColor: COLORS.grey,
    width: "100%",
    height: "50%",
    bottom: 0,
  },
  carBottomImage2: {
    width: "90%",
    height: "100%",
    bottom: 50,
    alignSelf: "center",
  },
  name2Text: {
    textAlign: "center",
    zIndex: 999,
    bottom: 68,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1.3,
  },
  middleIconsContainer: {
    position: "absolute",
    alignSelf: "center",
    height: "90%",
    width: "100%",
    zIndex: 999,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  leftRightParametersValuesContainer: {
    position: "absolute",
    alignSelf: "center",
    height: "90%",
    width: "100%",
    zIndex: 999,
    backgroundColor: "transparent",
    alignItems: "stretch",
    justifyContent: "center",
  },
  parameterIconContainerCell: {
    flex: 1,
    width: "40%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconImage: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
  leftColumnValues: {
    height: "100%",
    position: "absolute",
    width: "33%",
  },
  leftCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightColumnValues: {
    height: "100%",
    position: "absolute",
    right: 0,
    width: "33%",
  },
  rightCell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middleTextParameterName: { fontSize: 14, fontWeight: "600" },
  leftParameterValueText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 24,
    textAlign: "center",
  },
  rightParameterValueText: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 25,
    textAlign: "center",
  },
});
