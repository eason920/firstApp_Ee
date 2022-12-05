import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  //some
} from "react-native";
import styles from "../styles/basic";

// COMPONENTS
import { TouchButton } from "../components/TouchButton";

// ASYNC STORAGE
import * as StorageHelper from "../helpers/StorageHelper";

export default function FirstScreen(props) {
  // STATE SETTINGS
  const [collectShow, setCollectShow] = useState("none");
  const [collectID, setCollectID] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [collectButtonText, setCollectButtonText] = useState("編輯我的收藏");

  // COMPONENT-DID-MOUNT
  useEffect(() => {
    fnLoadStorage("asCollectID");
    fnFetchApi();
  }, []);

  // COMPONENT-DID-UPDATE
  useEffect(() => {
    const unSubscript = props.navigation.addListener("focus", () => {
      setCollectButtonText("編輯我的收藏");
      setCollectShow("none");
    });

    return unSubscript;
  }, [collectShow]);

  // API
  const fnFetchApi = () => {
    const apiUrl = "http://www.omdbapi.com/?apikey=29b45619&s=element";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        setDataSource(resData.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // FUNCTIIONS
  const fnDoCollectShow = () => {
    if (collectShow === "none") {
      setCollectButtonText("停止編輯");
      const newDataSource = dataSource.map((mapItem) => {
        const newItem = { ...mapItem };
        const index = collectID.findIndex(
          (indexItem) => indexItem === mapItem.imdbID
        );
        newItem.collected = index >= 0 ? true : false;
        return newItem;
      });
      setDataSource(newDataSource);

      setCollectShow("flex");
    } else {
      setCollectButtonText("編輯我的收藏");
      setCollectShow("none");
    }
  };

  const fnCleanCollect = () => {
    const newDataSource = dataSource.map((mapItem) => {
      const newItem = { ...mapItem };
      newItem.collected = false;
      return newItem;
    });
    setDataSource(newDataSource);
    setCollectID([]);
    fnSetStorage("asCollectID", []);
  };

  const fnDoCollect = (item) => {
    const newDataSource = dataSource.map((mapItem) => {
      const newItem = { ...mapItem };
      if (newItem.imdbID === item.imdbID) {
        newItem.collected = !newItem.collected;
      }
      return newItem;
    });
    setDataSource(newDataSource);

    const ary = [];
    newDataSource.forEach((eachItem) => {
      if (eachItem.collected) {
        ary.push(eachItem.imdbID);
      }
    });
    setCollectID(ary);
    fnSetStorage("asCollectID", ary);
  };

  const fnLoadStorage = async (key) => {
    try {
      let value = await StorageHelper.getMyStorage(key);
      if (value) {
        setCollectID(JSON.parse(value));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fnSetStorage = async (key, value) => {
    try {
      await StorageHelper.setMyStorage(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const fnRenderItem = ({ item }) => (
    <View style={styles.item}>
      {/http/.test(item.Poster) ? (
        <Image
          source={{ uri: item.Poster }}
          style={styles.itemPic}
          resizeMode="contain"
        />
      ) : (
        <Image source={require("../images/noPic.png")} style={styles.itemPic} />
      )}
      <View style={styles.itemMain}>
        <Text
          style={styles.itemMainTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.Title}
        </Text>
        <Text>
          {item.Type} | {item.Year}
        </Text>
        <Text>IMDB ID : {item.imdbID}</Text>
      </View>
      <TouchableOpacity onPress={() => fnDoCollect(item)}>
        {item.collected === true ? (
          <Image
            source={require("../images/checked.png")}
            style={styles.itemCheckbox}
            display={collectShow}
          />
        ) : (
          <Image
            source={require("../images/uncheck.png")}
            style={styles.itemCheckbox}
            display={collectShow}
          />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={(item) => fnRenderItem(item)}
        keyExtractor={(item) => item.imdbID}
        style={{ width: "100%" }}
      />
      <View style={styles.touchButtonBox}>
        <TouchButton
          propsTitle="清空收藏名單"
          propsFontColor="#fff"
          propsFunction={() => fnCleanCollect()}
          propsMarginRight={20}
        />
        <TouchButton
          propsTitle={collectButtonText}
          propsFontColor="#fff"
          propsFunction={() => fnDoCollectShow()}
        />
      </View>
    </View>
  );
}
