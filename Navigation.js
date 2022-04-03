import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "./src/screens/SettingsScreen";
import SearchScreen from "./src/screens/SearchScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import CompareScreen from "./src/screens/CompareScreen";
import { COLORS } from "./assets/consts/COLORS";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="CompareScreen" component={CompareScreen} />
    </Stack.Navigator>
  );
};
// function used to call a phone number
const dialCall = () => {
  let phoneNumber = "";

  if (Platform.OS === "android") {
    phoneNumber = `tel:${111222333}`;
  } else {
    phoneNumber = `telprompt:${111222333}`;
  }
  Linking.openURL(phoneNumber);
};
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ paddingVertical: 30 }}>
      <View style={{ marginLeft: 20, marginVertical: 15, marginTop: 30 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 10, marginBottom: 20 }}
          source={require("/Users/adam/projects/CarRental/assets/images/KrzysztofH.jpeg")}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            letterSpacing: 1.2,
            marginBottom: 5,
          }}
        >
          CarRent24
        </Text>
        <TouchableOpacity onPress={() => dialCall()}>
          <Text>Need help? Call us</Text>
          <View
            style={{ flexDirection: "row", marginTop: 5, marginVertical: 5 }}
          >
            <MaterialIcons name="phone" size={18} color={COLORS.black} />
            <Text style={{ marginLeft: 5 }}>111 222 333</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: null,
          drawerActiveTintColor: COLORS.yellow,
          drawerStyle: { backgroundColor: COLORS.white, width: "50%" },
          drawerLabelStyle: { fontSize: 14, fontWeight: "700" },
          sceneContainerStyle: { backgroundColor: COLORS.white },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="MainStack"
      >
        <Drawer.Screen
          name="MainStack"
          component={MainStack}
          options={{
            title: "Rent",
            drawerIcon: ({ color }) => (
              <Ionicons
                style={{ marginLeft: 5, marginRight: -10 }}
                name="car-sport-sharp"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Settings",
            drawerIcon: ({ color }) => (
              <Ionicons
                style={{ marginLeft: 5, marginRight: -10 }}
                name="settings"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
