import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import SearchScreen from "./src/screens/SearchScreen";
import { FilteringServiceProvider } from "./src/service/FilteringService";
import { Navigation } from "./Navigation";
import { ComparisonCarServiceProvider } from "./src/service/ComparisonCarService";

export default function App() {
  return (
    <>
      <ComparisonCarServiceProvider>
        <FilteringServiceProvider>
          <Navigation />
        </FilteringServiceProvider>
      </ComparisonCarServiceProvider>
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
