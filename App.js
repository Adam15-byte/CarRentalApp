import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import SearchScreen from "./src/screens/SearchScreen";
import { FilteringServiceProvider } from "./src/service/FilteringService";
import { Navigation } from "./Navigation";

export default function App() {
  return (
    <>
      <FilteringServiceProvider>
        <Navigation />
      </FilteringServiceProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
