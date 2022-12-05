import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },

  // FLAT
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    flex: 1,
  },
  itemPic: { flex: 4, height: 78 },
  itemMain: { flex: 20, paddingLeft: 10 },
  itemMainTitle: { fontSize: 18, fontWeight: "bold" },
  itemMainContent: {
    width: "100%",
    color: "#555",
  },

  // FLAT COLLECT CHECKBOX
  itemCheckBoxOuter: {
    flex: 0,
  },
  itemCheckbox: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 20,
  },

  // NO DATA BLOCK
  noData: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#BACECB",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  noDataText: {
    fontSize: 20,
  },

  // TOUCHABLE BUTTON
  touchButtonBox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    width: "100%",
  },

  touchButton: {
    borderRadius: 18,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 170,
  },
});
