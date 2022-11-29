import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

// StyleSheet
import fnColor from "./src/styles/fnColor";
import styles from "./src/styles/basic";
import stylesButton from "./src/styles/button";

// Component
import {
  CpnTouchableHeightLight,
  CpnTouchableHeightLightMultProps,
  CpnTouchableOpacityMultProps,
} from "./src/components/Button/MyButton";
import CpnNavBar from "./src/components/Public/CpnNavBar";

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
  const fnSetNumAdd = () => {
    setNum(num + 1);
  };
  const fnSetNumClean = () => {
    setNum(168);
  };
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
        <View style={[stylesButton.buttonView]}>
          <Button
            title="COUPLE"
            onPress={() => fnSetWho("button")}
            style={[stylesButton.button, { color: "#333" }, styles.text]}
          />
        </View>

        {/* HIGHT-LIGHT */}
        <CpnTouchableHeightLight
          myText={"CpnTouchableHeightLight"}
          myOnPress={() => fnSetWho(123)}
          myKey={20}
          myProperty2={"backgroundColor"}
          myKey2={"greenyellow"}
        />
        <CpnTouchableHeightLightMultProps
          propsText={"CpnTouchableHeightLightMultProps"}
          propsFn={fnSetWho}
        >
          <Image
            style={[stylesButton.icon]}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
            }}
          />
        </CpnTouchableHeightLightMultProps>

        {/* OPACITY */}
        <TouchableOpacity
          style={[stylesButton.to, stylesButton.touchShare]}
          onPress={() => fnSetWho("touchableOpacity")}
        >
          <View style={[stylesButton.iconTextBox]}>
            <Image
              style={[stylesButton.icon]}
              source={require("./src/images/star.png")}
            />
            <Text style={[stylesButton.toText, stylesButton.touchShareText]}>
              TouchableOpacity (not cpn)
            </Text>
          </View>
        </TouchableOpacity>
        {/**/}
        <CpnTouchableOpacityMultProps propsFn={fnSetWho}>
          <Image
            style={[stylesButton.icon]}
            source={require("./src/images/star.png")}
          />
          <Text style={[stylesButton.toText, stylesButton.touchShareText]}>
            CpnTouchableOpacityMultProps
          </Text>
        </CpnTouchableOpacityMultProps>
      </View>

      {/* PAGE 2 : Counter */}
      <View style={styles.page} display={page2}>
        <View style={styles.countBox}>
          <CpnTouchableHeightLightMultProps
            propsText={"+1"}
            propsFn={fnSetNumAdd}
            propsWidth={"48%"}
          />
          <CpnTouchableHeightLightMultProps
            propsText={"clean"}
            propsFn={fnSetNumClean}
            propsWidth={"48%"}
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
        <CpnTouchableHeightLightMultProps
          propsText={"確認密碼"}
          propsFn={fnCheck}
        >
          <Image
            style={[stylesButton.icon]}
            source={require("./src/images/heart.png")}
          />
        </CpnTouchableHeightLightMultProps>
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
