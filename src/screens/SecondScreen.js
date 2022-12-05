import { useState, useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "../styles/basic";

// ASYNC STORAGE
import * as StorageHelper from "../helpers/StorageHelper";

export default function SecondScreen(props) {
  const [collectID, setCollectID] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [flatShow, setFlatShow] = useState("none");
  const [noDataShow, setNoDataShow] = useState("flex");

  // COMPONENT-DID-UPDATE
  useEffect(() => {
    const unSubscript = props.navigation.addListener("focus", () => {
      setDataSource([]);
      fnLoadStorage("asCollectID");
    });

    return unSubscript;
  }, [collectID]);

  const fnLoadStorage = async (key) => {
    try {
      let value = await StorageHelper.getMyStorage(key);
      const aValue = JSON.parse(value);
      if (aValue.length != 0) {
        const aCollectID = aValue;
        aCollectID.forEach((id) => {
          fnFetchApi(id);
        });
        setCollectID(aCollectID);
        setFlatShow("flex");
        setNoDataShow("none");
      } else {
        setFlatShow("none");
        setNoDataShow("flex");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // API
  const fnFetchApi = (id) => {
    console.log("api action");
    const apiUrl = "http://www.omdbapi.com/?apikey=29b45619&i=" + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        const newDataSource = dataSource;
        newDataSource.push(resData);
        setDataSource(newDataSource);
      })
      .catch((err) => {
        console.log(err);
      });
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
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={(item) => fnRenderItem(item)}
        keyExtractor={(item) => item.imdbID}
        style={{ width: "100%" }}
        display={flatShow}
      />
      <View style={styles.noData} display={noDataShow}>
        <Text style={styles.noDataText}>No Data Collected</Text>
      </View>
    </View>
  );
}
