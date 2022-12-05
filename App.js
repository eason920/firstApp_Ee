import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// BAR OF NAV & TAB
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// ICONS
import { Ionicons } from "react-native-vector-icons";

// SCREEN
import FirstScreen from "./src/screens/FirstScreen";
import SecondScreen from "./src/screens/SecondScreen";

// USE
const Tab = createBottomTabNavigator();

export default function App() {
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: "#0C7865",
    tabBarInactiveTintColor: "#bbb",
    tabBarIcon: ({ focused, color }) => {
      let icon = "";
      switch (route.name) {
        case "FirstScreen":
          icon = "ios-cafe";
          break;
        case "SecondScreen":
          icon = "ios-albums";
          break;
        default:
          icon = "ios-home-outline";
      }
      if (!focused) {
        icon = icon + "-outline";
      }
      return (
        <Ionicons
          name={icon}
          color={color}
          size={25}
          style={{ marginTop: 7 }}
        />
      );
    },
  });
  return (
    // dev by Eason
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="FirstScreen"
        screenOptions={screenOptions}
      >
        <Tab.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ title: "電影列表" }}
        />
        <Tab.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ title: "我的收藏" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


