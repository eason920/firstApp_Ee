import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const fnColor = (persent) => {
  return "hsl(190, 80%, " + persent + "%)";
};

export default function App() {
  const lover = {
    man: "Eason",
    woman: "Wenlin",
  };
  const [who, setWho] = useState(lover.man);
  const fnSetWho = (msg) => {
    setWho(who === lover.woman ? lover.man : lover.woman);
    console.log("got cuple click from ", msg);
  };
  //
  const [sin, setSin] = useState("");
  const [tf, setTf] = useState("錯誤");
  const fnSetSin = (text) => {
    setSin(text);
    setTf(text === "1100130" ? "正確 ~" : "錯誤");
  };
  //
  const [page1, setPage1] = useState("flex");
  const [page2, setPage2] = useState("none");
  const fnSetPage = (page) => {
    switch (page) {
      case 1:
        setPage1("flex");
        setPage2("none");
        break;
      case 2:
        setPage1("none");
        setPage2("flex");
        break;
      default:
    }
  };
  return (
    <View style={styles.container}>
      {/* PAGE 1 : About US */}
      <View style={styles.page} display={page1}>
        <Text style={[styles.text]}>{who}</Text>
        <View style={[styles.buttonView]}>
          <Button
            title="COUPLE"
            onPress={() => fnSetWho("button")}
            style={[styles.button, { color: "#333" }, styles.text]}
          />
        </View>
        <TouchableHighlight
          style={[styles.thl, styles.touchShare]}
          onPress={() => fnSetWho("touchablehighlight")}
        >
          <Text style={[styles.thlText, styles.touchShareText]}>THL</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={[styles.to, styles.touchShare]}
          onPress={() => fnSetWho("touchableOpacity")}
        >
          <Text style={[styles.toText, styles.touchShareText]}>TO</Text>
        </TouchableOpacity>
      </View>

      {/* PAGE 2 : CelebrateDate */}
      <View style={styles.page} display={page2}>
        <TextInput
          style={[{ backgroundColor: fnColor(30) }, styles.txtIpt]}
          onChangeText={(text) => fnSetSin(text)}
          value={sin}
          keyboardType={"numeric"}
          placeholder="請輸入"
          secureTextEntry={true}
          maxLength={7}
          editable={true}
          autoFocus={false}
        />
        <Text style={styles.secure}>輸入的是「{sin}」</Text>
        <Text style={{ fontSize: 20, color: fnColor(20) }}>密碼{tf}</Text>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navBarItem]}
          onPress={() => fnSetPage(1)}
        >
          <Text style={[styles.navBarItemText]}>About US</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navBarItem]}
          onPress={() => fnSetPage(2)}
        >
          <Text style={[styles.navBarItemText]}>CelebrateDate</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // STRUCTURE
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
  // BUTTON 1
  buttonView: {
    backgroundColor: fnColor(70),
    width: "30%",
    height: 60,
    borderRadius: 10,
    paddingTop: 10,
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
    width: "30%",
    borderRadius: 15,
  },
  touchShareText: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 15,
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
  },
  toText: {
    color: fnColor(80),
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
  secure: {
    color: fnColor(20),
    fontSize: 10,
  },
  // PAGE
  page: {
    flex: 13,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },
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
    fontSize: 20,
    color: "#fff",
  },
});
