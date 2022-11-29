import { StyleSheet } from "react-native";
import fnColor from "./fnColor";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "greenyellow",
    backgroundColor: fnColor(50),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 5,
    fontSize: 70,
    color: "#fff",
    width: "100%",
    paddingLeft: "4%",
    textAlign: "center",
    textTransform: "uppercase",
  },
  // INPUT
  txtIpt: {
    color: fnColor(80),
    width: 300,
    height: 80,
    borderWidth: 5,
    borderColor: fnColor(70),
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    fontSize: 20,
  },
  // COUNT
  countBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  // PAGE
  page: {
    flex: 13,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },
});
