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
  Image,
} from "react-native";

const fnColor = (persent) => {
  return "hsl(0, 60%, " + persent + "%)";
  // 0 red / 120 green /  240 blue
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
  const fnSetSin = (text) => {
    setSin(text);
  };
  //
  const fnCheck = () => {
    if (sin !== "") {
      const tf = sin === "1100130" ? "正確~" : "錯誤,您輸入的是" + sin;
      alert("輸入" + tf);
    } else {
      alert("請輸入密碼");
    }
  };
  //
  const [num, setNum] = useState(0);
  const fnSetNumAdd = ()=> {
    setNum(num + 1);
  }
  const fnSetNumClean = ()=> {
    setNum(168);
  }
  //
  const [nowPage, setNowPage] = useState("About US");
  const [page1, setPage1] = useState("flex");
  const [page2, setPage2] = useState("none");
  const [page3, setPage3] = useState("none");
  const fnSetPage = (page) => {
    switch (page) {
      case "About US":
        setPage1("flex");
        setPage2("none");
        setPage3("none");
        break;
      case "Counter":
        setPage1("none");
        setPage2("flex");
        setPage3("none");
        break;
      case "CelebrateDate":
        setPage1("none");
        setPage2("none");
        setPage3("flex");
      default:
    }
    setNowPage(page);
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
        <CpnTHL
          propsText={"CpnTHL"}
          propsFn={fnSetWho}
        >
          <Image
            style={[styles.icon]}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
            }}
          />
        </CpnTHL>
        <TouchableOpacity
          style={[styles.to, styles.touchShare]}
          onPress={() => fnSetWho("touchableOpacity")}
        >
          <View style={[styles.iconTextBox]}>
            <Image
              style={[styles.icon]}
              source={require("./src/images/star.png")}
            />
            <Text style={[styles.toText, styles.touchShareText]}>TO</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* PAGE 2 : Counter */}
      <View style={styles.page} display={page2}>
        <View style={styles.countBox}>
          <CpnTHL
            propsText={"+1"}
            propsFn={fnSetNumAdd}
          />
          <CpnTHL
            propsText={"clean"}
            propsFn={fnSetNumClean}
          />
        </View>
        <Text style={[{ fontSize: 20, marginTop: 10 }]}>now is {num}</Text>
      </View>

      {/* PAGE 3 : CelebrateDate */}
      <View style={styles.page} display={page3}>
        <TextInput
          style={[{ backgroundColor: fnColor(35) }, styles.txtIpt]}
          onChangeText={(text) => fnSetSin(text)}
          value={sin}
          keyboardType={"numeric"}
          placeholder="請輸入"
          secureTextEntry={true}
          maxLength={7}
          editable={true}
          autoFocus={false}
        />
        <CpnTHL
          propsText={"確認密碼"}
          propsFn={fnCheck}
        >
          <Image
            style={[styles.icon]}
            source={require("./src/images/heart.png")}
          />
        </CpnTHL>
      </View>

      {/* NAV BAR */}
      <CpnNavBar
        propsKeys={["About US", "Counter", "CelebrateDate"]}
        propsKey={nowPage}
        propsFn={fnSetPage}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const CpnTHL = ({ propsFn, propsText, children }) => (
  <TouchableHighlight
    style={[styles.thl, styles.touchShare]}
    onPress={() => propsFn("touched THL CPN")}
  >
    <View style={[styles.iconTextBox]}>
      {children}
      <Text style={[styles.thlText, styles.touchShareText]}>{propsText}</Text>
    </View>
  </TouchableHighlight>
);

const CpnNavBar = ({ propsKeys, propsKey, propsFn }) => (
  <View style={styles.navBar}>
    {propsKeys.map((item) => (
      <TouchableOpacity
        key={item}
        style={[styles.navBarItem]}
        onPress={() => propsFn(item)}
      >
        <Text
          style={[
            styles.navBarItemText,
            propsKey === item && styles.navBarItemTextOn,
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

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
    width: "48%",
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
    width: "48%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  touchShareText: {
    textAlign: "center",
    fontSize: 20,
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
    fontSize: 14,
    color: "#fff",
  },
  navBarItemTextOn: {
    color: fnColor(50),
  },
});
