import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { globalStyles } from "../assets/styles/global";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const img = require("../assets/aloevera.png");
const img2 = require("../assets/smallplant.png");
const img3 = require("../assets/flowerplant.png");

export default function DetailsScreen({ navigation }) {
  const [top, setTop] = useState([{ title: "Top" }]);
  const [outdoor, setOutdoor] = useState([{ title: "Outdoor" }]);
  const [indoor, setIndoor] = useState([{ title: "Indoor" }]);
  const [plant, setPlant] = useState([{ title: "Plant O" }]);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.heading}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Top Picks</Text>
      </View>
      <ScrollView horizontal={true}>
        <View
          style={{
            flex: 1,
            padding: 24,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PreviewScreen")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                justifyContent: "space-between",
                marginHorizontal: 3,
              }}
            >
              Top
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreviewScreen")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                justifyContent: "space-between",
                marginHorizontal: 20,
                color: "rgba(196, 196, 196, 1)",
              }}
            >
              Outdoor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreviewScreen")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginHorizontal: 20,
                justifyContent: "space-between",
                color: "rgba(196, 196, 196, 1)",
              }}
            >
              Indoor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreviewScreen")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginHorizontal: 20,
                justifyContent: "space-between",
                color: "rgba(196, 196, 196, 1)",
              }}
            >
              Plant Object
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ScrollView horizontal={true}>
        <View
          style={{
            flex: 3,
            justifyContent: "space-around",
            flexDirection: "row",
            height: 200,
          }}
        >
          <View
            style={{
              flex: 1,
              borderRadius: 8,
              padding: 24,
              marginHorizontal: 10,
              justifyContent: "space-around",
              backgroundColor: "rgba(0, 178, 109, 0.8)",
              height: 210,
              width: 200,
            }}
          >
            <View style={{ position: "absolute", padding: 12 }}>
              <Text style={{ color: "white", fontSize: 12 }}>OUTDOOR</Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
              >
                Aloe Vera
              </Text>
            </View>
            <ImageBackground style={globalStyles.image} source={img} />
            <View
              style={{
                position: "absolute",
                alignSelf: "flex-end",
                padding: 10,
              }}
            >
              <Text style={{ color: "white" }}>from</Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
              >
                $25
              </Text>
            </View>
            <View
              style={{
                padding: 24,
                borderRadius: 100,
                backgroundColor: "black",
                position: "absolute",
                elevation: 10,
                width: 65.5,
                height: 65.5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 175,
              }}
            >
              <TouchableOpacity>
                <AntDesign
                  name="shoppingcart"
                  size={20}
                  color="white"
                  style={{
                    alignItems: "flex-start",
                    alignSelf: "flex-start",
                    bottom: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    marginHorizontal: -15,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              borderRadius: 8,
              padding: 24,
              marginHorizontal: 10,
              justifyContent: "space-around",
              backgroundColor: "rgba(0, 178, 109, 0.6)",
              height: 210,
              width: 200,
            }}
          >
            <ImageBackground style={globalStyles.image} source={img2} />
          </View>
          <View
            style={{
              flex: 1,
              borderRadius: 8,
              padding: 24,
              marginHorizontal: 10,
              justifyContent: "space-around",
              backgroundColor: "rgba(0, 178, 109, 0.6)",
              height: 210,
              width: 200,
            }}
          >
            <ImageBackground style={globalStyles.image} source={img3} />
          </View>
        </View>
      </ScrollView>
      <View style={globalStyles.heading}>
        <TouchableOpacity onPress={() => navigation.navigate("PreviewScreen")}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              justifyContent: "flex-end",
              marginBottom: -25,
            }}
          >
            Describtion
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ padding: 24, fontSize: 14, fontWeight: "normal" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
    </View>
  );
}
