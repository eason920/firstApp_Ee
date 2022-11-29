import { StyleSheet } from "react-native";
import fnColor from "./fnColor";

export default StyleSheet.create({
  // NAV BAR
  navBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: fnColor(10),
    width: "100%",
  },
  navBarItem: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBarItemText: {
    fontSize: 14,
    color: "#fff",
  },
  navBarItemTextOn: {
    color: fnColor(50),
  },
});
