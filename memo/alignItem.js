import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const App = () => {
  const [alignItems, setAlignItems] = useState("stretch");

  return (
    <PreviewLayout
      propsProperty="alignItems"
      propsKeys={[
        "flex-start",
        "flex-end",
        "baseline",
        "auto",
        "center",
        "stretch",
      ]}
      propsKey={alignItems}
      propsFn={setAlignItems}
    >
      <View
        style={[styles.cssChildren, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.cssChildren, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[
          styles.cssChildren,
          {
            backgroundColor: "steelblue",
            width: "auto",
            minWidth: 50,
          },
        ]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  propsProperty,
  propsKeys,
  propsKey,
  propsFn,
  children,
}) => (
  <View style={{ flex: 1, marginTop: 200 }}>
    {/* UI:LABEL */}
    <View style={styles.cssRow}>
      {propsKeys.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => propsFn(item)}
          style={[
            styles.cssLabel,
            propsKey === item && styles.cssLabelOn,
          ]}
        >
          <Text
            style={[
              styles.cssLabelText,
              propsKey === item &&
                styles.cssLabelTextOn,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    {/* UI:FLEX BOX */}
    <View
      style={[
        styles.container,
        { [propsProperty]: propsKey },
      ]}
    >
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  cssChildren: {
    width: 50,
    height: 50,
  },
  cssRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cssLabel: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  cssLabelOn: {
    backgroundColor: "red",
    borderWidth: 0,
  },
  cssLabelText: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  cssLabelTextOn: {
    color: "white",
  },
  cssTitle: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default App;