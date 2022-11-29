import {
  TouchableHighlight,
  TouchableOpacity,
  //
  View,
  Text,
} from "react-native";

import styles from "../../styles/button";
import stylesButton from "../../styles/button";

import propTypes from "prop-types";

// HIGHT-LIGHT
// function CpnTouchableHeightLight(props) {
//   return (
//     <TouchableHighlight
//       style={[styles.to, styles.touchShare]}
//       onPress={props.myOnPress}
//     >
//       <View>
//         <Text>{props.myText}</Text>
//       </View>
//     </TouchableHighlight>
//   );
// }

export const CpnTouchableHeightLight = (props) => (
  <TouchableHighlight
    style={[
      styles.to,
      styles.touchShare,
      { [props.myProperty2]: props.myKey2 },
    ]}
    onPress={props.myOnPress}
  >
    <View>
      <Text
        style={[
          {
            [props.myProperty]: props.myKey,
          },
        ]}
      >
        {props.myText}
      </Text>
    </View>
  </TouchableHighlight>
);

CpnTouchableHeightLight.propTypes = {
  myProperty: propTypes.string,
  myKey: propTypes.number,
};

CpnTouchableHeightLight.defaultProps = {
  myProperty: "fontSize",
  myKey: 50,
};

export const CpnTouchableHeightLightMultProps = ({
  propsFn,
  propsText,
  propsWidth,
  children,
}) => (
  <TouchableHighlight
    style={[stylesButton.thl, stylesButton.touchShare, { width: propsWidth }]}
    onPress={() => propsFn("touched THL CPN")}
  >
    <View style={[stylesButton.iconTextBox]}>
      {children}
      <Text style={[stylesButton.thlText, stylesButton.touchShareText]}>
        {propsText}
      </Text>
    </View>
  </TouchableHighlight>
);

CpnTouchableHeightLightMultProps.defaultProps = {
  propsWidth: 300,
};

// OPACITY
export const CpnTouchableOpacityMultProps = ({ propsFn, children }) => {
  return (
    <TouchableOpacity
      style={[stylesButton.to, stylesButton.touchShare]}
      onPress={() => propsFn("MytouchableOpacity")}
    >
      <View style={[stylesButton.iconTextBox]}>{children}</View>
    </TouchableOpacity>
  );
};
