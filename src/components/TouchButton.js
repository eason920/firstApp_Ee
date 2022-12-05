import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../styles/basic";

export const TouchButton = ({
  propsTitle,
  propsBgColor,
  propsFontColor,
  propsFunction,
  propsMarginRight,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.touchButton,
        { backgroundColor: propsBgColor, marginRight: propsMarginRight },
      ]}
      onPress={propsFunction}
    >
      {children}
      <Text style={{ color: propsFontColor, fontSize: 16 }}>{propsTitle}</Text>
    </TouchableOpacity>
  );
};

TouchButton.defaultProps = {
  propsBgColor: "#aaa",
  propsFontColor: "#000",
  propsTitle: "none",
  propsBgColor: "#1BD6B4",
};
