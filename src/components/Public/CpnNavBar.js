import { View, TouchableOpacity, Text } from "react-native";

import stylesNav from "../../styles/navigator";

const CpnNavBar = ({ propsKeys, propsKey, propsFn }) => (
  <View style={stylesNav.navBar}>
    {propsKeys.map((item) => (
      <TouchableOpacity
        key={item}
        style={[stylesNav.navBarItem]}
        onPress={() => propsFn(item)}
      >
        <Text
          style={[
            stylesNav.navBarItemText,
            propsKey === item && stylesNav.navBarItemTextOn,
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CpnNavBar;

// vvv xx
// export default function CpnNavBar({ propsKeys, propsKey, propsFn }) {
//   <View style={stylesNav.navBar}>
//     {propsKeys.map((item) => (
//       <TouchableOpacity
//         key={item}
//         style={[stylesNav.navBarItem]}
//         onPress={() => propsFn(item)}
//       >
//         <Text
//           style={[
//             stylesNav.navBarItemText,
//             propsKey === item && stylesNav.navBarItemTextOn,
//           ]}
//         >
//           {item}
//         </Text>
//       </TouchableOpacity>
//     ))}
//   </View>;
// }
