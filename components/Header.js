import { View } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../assets/styles/global";

export default function Header() {
  return (
    <View>
      <Ionicons
        name="ios-menu-outline"
        size={24}
        color="black"
        style={{
          alignSelf: "flex-end",
          alignItems: "flex-end",
          position: "absolute",
          left: 0,
        }}
      />
      <AntDesign
        name="shoppingcart"
        size={24}
        color="black"
        style={{
          alignItems: "flex-start",
          alignSelf: "flex-start",
          position: "absolute",
          right: 0,
        }}
      />
    </View>
  );
}
