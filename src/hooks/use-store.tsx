import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default () => {
  const addStore = async <T = string,>(key: string, item: T) => {
    await AsyncStorage.setItem(key, item as string);
  };
  const deleteStore = async (key: string) => {
    await AsyncStorage.removeItem(key);
  };

  const [getValue, setGetValue] = useState("");

  /**
   *
   * @param key The key you used to add item to store
   * @returns
   */
  const getStore = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value;
    } catch (error) {
      console.log(`Could not get item with key: ${key}`);
      return "no value";
    }
  };
  return { addStore, getStore, deleteStore };
};
