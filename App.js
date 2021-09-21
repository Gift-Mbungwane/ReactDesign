import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./components/DetailsScreen";
import PreviewScreen from "./components/PreviewScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            title: "",
            headerRight: () => (
              <AntDesign
                name="shoppingcart"
                size={24}
                color="black"
                style={{
                  alignItems: "flex-end",
                  alignSelf: "flex-end",
                  right: 0,
                }}
              />
            ),
            headerLeft: () => (
              <Ionicons
                name="ios-menu-outline"
                size={24}
                color="black"
                style={{
                  alignSelf: "flex-end",
                  alignItems: "flex-end",
                  left: 0,
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="PreviewScreen"
          component={PreviewScreen}
          options={{
            title: "",
            headerRight: () => (
              <AntDesign
                name="shoppingcart"
                size={24}
                color="black"
                style={{
                  alignItems: "flex-end",
                  alignSelf: "flex-end",
                  right: 0,
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
