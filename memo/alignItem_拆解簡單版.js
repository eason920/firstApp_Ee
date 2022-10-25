import {
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={[styles.outer]}>
      <View style={[styles.container]}>
        <View style={[styles.box, { backgroundColor: "red" }]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
        <View style={[styles.box, { backgroundColor: "blue" }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#01c3e0",
  },
  box: {
    width: 50,
    height: 50,
  },
});
