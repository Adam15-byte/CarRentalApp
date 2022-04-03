import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/consts/COLORS";
import SearchBar from "../components/SearchBar";
import { LogoArray } from "../../assets/data/logosArray";
import { CarData } from "../../assets/data/CarData";
import LogosBar from "../components/LogosBar";
import CarDataFlatList from "../components/CarDataFlatList";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topBarContainer}>
        <Ionicons
          name="menu"
          size={24}
          color={COLORS.black}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.nameText}>Adam Jankowski</Text>
        <Image
          style={styles.profilePicture}
          source={require("/Users/adam/projects/CarRental/assets/images/KrzysztofH.jpeg")}
        />
      </View>
      <View style={styles.searchResultsContainer}>
        <SearchBar />
        <LogosBar />
        <CarDataFlatList />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: COLORS.white,
  },
  topBarContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 25,
    top: 30,
  },
  profilePicture: {
    width: width / 10,
    height: width / 10,
    borderRadius: width / 5,
    marginLeft: "auto",
  },
  nameText: {
    marginLeft: "auto",
    fontWeight: "700",
    fontSize: 15,
    color: COLORS.black,
    alignSelf: "center",
  },
  searchResultsContainer: {
    top: 70,
    backgroundColor: COLORS.grey,
    width: width,
    height: "100%",
    borderTopLeftRadius: width / 11,
    borderTopRightRadius: width / 11,
    paddingTop: 20,
    alignItems: "center",
  },
});
