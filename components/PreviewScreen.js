import * as React from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../assets/styles/global";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const imag = require("../assets/ficus.png");

export default function PreviewScreen({ navigation }) {
  return (
    <View style={globalStyles.prevContainer}>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 14 }}>lorem</Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Ficus
        </Text>
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 14 }}>from</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          $30
        </Text>
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 14 }}>size</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Small
        </Text>
      </View>
      <View
        style={{
          padding: 24,
          borderRadius: 70,
          backgroundColor: "black",
          elevation: 10,
          width: 75,
          height: 75,
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <AntDesign
          name="shoppingcart"
          size={24}
          color="white"
          style={{
            alignItems: "flex-start",
            alignSelf: "flex-start",
            bottom: 0,
            alignItems: "center",
            alignSelf: "center",
          }}
        />
      </View>

      <View
        style={{
          borderRadius: 15,
          backgroundColor: "#FFF",
          height: "auto",
        }}
      >
        <Image
          source={imag}
          style={{
            height: 300,
            width: 200,
            position: "absolute",
            bottom: 190,
            right: 10,
            elevation: 10,
          }}
        />
        <Text style={{ padding: 24, fontSize: 25, marginTop: 50 }}>
          All to Know...
        </Text>
        <ScrollView>
          <Text style={{ padding: 24, fontSize: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
