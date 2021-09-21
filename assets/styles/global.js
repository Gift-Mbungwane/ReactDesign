import { StyleSheet } from "react-native";
import constant from "expo-constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dContainer: {
    flex: 1,
    flexDirection: "row",

    padding: 24,
    fontFamily: "sans-serif",
    fontSize: 24,
  },
  prevContainer: {
    backgroundColor: "rgba(0, 178, 109, 1)",
  },
  prev2Container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#FFF",
    marginTop: 350,
    width: "100%",
  },

  heading: {
    fontSize: 30,
    color: "white",
    fontWeight: "50",
    padding: 24,
  },

  subheading: {
    flex: 2,
    fontSize: 20,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "100",
    margin: 2,
  },
  plantsContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 24,
    margin: 12,
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 178, 109, 0.42)",
    height: 220,
    width: 200,
  },

  pContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 24,
    marginTop: 30,
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 178, 109, 0.42)",
    height: 150,
    width: 165,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: constant.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "absolute",
    top: 150,
    right: 10,
    elevation: 10,
    backgroundColor: "black",
  },
});
