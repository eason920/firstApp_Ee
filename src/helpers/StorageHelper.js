// import { AsyncStorage } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
/*
 * asCollectID {ary}
 */

// export const getMyStorage = (key) => AsyncStorage.getItem(key);
// export const setMyStorage = (key, value) => AsyncStorage.setItem(key, value);
// export const removeMyStorage = (key) => AsyncStorage.removeItem(key);

export const getMyStorage = (key) => {
  return AsyncStorage.getItem(key);
};
export const setMyStorage = (key, value) => {
  return AsyncStorage.setItem(key, value);
};
export const removeMyStorage = (key) => {
  return AsyncStorage.removeItem(key);
};
