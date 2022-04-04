import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../../assets/consts/COLORS";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import CarParametersBarList from "../components/CarParametersBarList";
import PickupMap from "../components/PickupMap";
import PriceTag from "../components/PriceTag";
import BigButton from "../components/BigButton";
import BackButton from "../components/BackButton";

const { width, height } = Dimensions.get("window");

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const renderItemImage = ({ item, index }) => (
    <>
      {index === 0 && (
        <View style={styles.firstImageContainer}>
          <Image
            resizeMode={index === 0 ? "contain" : "cover"}
            style={styles.topImageFirst}
            source={{ uri: item }}
          />
        </View>
      )}
      {index > 0 && (
        <Image
          resizeMode={index === 0 ? "contain" : "cover"}
          style={styles.topImage}
          source={{ uri: item }}
        />
      )}
    </>
  );
  // Animated DOTS below the image
  const scrollX = useRef(new Animated.Value(0)).current;
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <View style={styles.dots}>
        {route.params.stats.image.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightyellow,
              COLORS.yellow,
              COLORS.lightyellow,
            ],
            extrapolate: "clamp",
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={[
                styles.dot,
                { backgroundColor: dotColor, width: dotWidth },
              ]}
            />
          );
        })}
      </View>
    );
  };
  const renderDots = () => (
    <View style={styles.dotsContainer}>
      <Dots />
    </View>
  );
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <BackButton />
        <PriceTag price={route.params.stats.price} />
        <Animated.FlatList
          data={route.params.stats.image}
          renderItem={renderItemImage}
          keyExtractor={(item) => item}
          snapToInterval={width}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          decelerationRate={0}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
        {renderDots()}
      </View>
      <View style={styles.secondContainer}>
        {/* Parameters List */}
        <View style={styles.statsContainer}>
          <Text style={styles.parametersHeadline}>Parameters</Text>
          <CarParametersBarList
            seats={route.params.stats.seats}
            engine={route.params.stats.engine}
            power={route.params.stats.power}
            maxSpeed={route.params.stats.maxSpeed}
            toHundred={route.params.stats.toHundred}
            gear={route.params.stats.gear}
          />
        </View>
        {/* Map with pick-up places */}
        <View style={styles.statsContainer}>
          <Text style={styles.parametersHeadline}>Pick-up locations</Text>
          <PickupMap />
        </View>
        <View style={styles.bottomButtonsContainer}>
          <BigButton />
          <Text
            style={styles.compareText}
            onPress={() => navigation.navigate("CompareScreen", { route })}
          >
            Not sure? Compare against another car
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: "100%",
    height: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  topImage: {
    width: width,
    height: "100%",
  },
  firstImageContainer: {
    width: width,
    height: "100%",
    padding: 20,
  },
  topImageFirst: {
    width: "100%",
    height: "100%",
  },
  dotsContainer: {
    position: "absolute",
    width: "30%",
    minHeight: 10,
    padding: 40,
    bottom: 15,
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    borderRadius: 5,
    height: 10,
    marginHorizontal: 6,
  },
  secondContainer: {
    top: -35,
    backgroundColor: COLORS.grey,
    width: width,
    height: "100%",
    borderTopLeftRadius: width / 12,
    borderTopRightRadius: width / 12,
    paddingTop: 20,
    alignItems: "center",
  },
  statsContainer: {
    width: "100%",
    minHeight: 100,
  },
  parametersHeadline: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1.1,
    marginLeft: 30,
  },
  bottomButtonsContainer: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  compareText: {
    marginTop: "auto",
    fontSize: 14,
    fontWeight: "600",
  },
});
