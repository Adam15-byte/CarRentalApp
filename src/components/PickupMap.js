import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { mapRegion } from "../../assets/data/MapData";
import { markersData } from "../../assets/data/MapData";

const { width, height } = Dimensions.get("window");

const PickupMap = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        {markersData.map((item, index) => {
          return <Marker key={index} coordinate={item} />;
        })}
      </MapView>
    </View>
  );
};

export default PickupMap;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  map: {
    width: 350,
    height: 200,
    borderRadius: 20,
  },
});
