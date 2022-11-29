import { StyleSheet } from "react-native";
import fnColor from "./fnColor";

const marginBottom = 15;
const width = 300;

export default StyleSheet.create({
  // BUTTON 1
  buttonView: {
    backgroundColor: fnColor(70),
    width,
    height: 60,
    borderRadius: 10,
    paddingTop: 10,
    marginBottom
  },
  button: {
    margin: 20,
    fontSize: 20,
    height: 50,
    padding: 20,
    lineHeight: 2,
    backgroundColor: "red",
    border: "solid 2px #aaa",
  },
  // BUTTON 2 : TouchableHighlight & TouchableOpacity
  touchShare: {
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom
  },
  touchShareText: {
    textAlign: "center",
    fontSize: 14,
  },
  //
  thl: {
    backgroundColor: fnColor(40),
  },
  thlText: {
    color: fnColor(100),
  },
  //
  to: {
    backgroundColor: fnColor(20),
    paddingLeft: 20,
    paddingRight: 20,
  },
  toText: {
    color: fnColor(80),
  },
  iconTextBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
