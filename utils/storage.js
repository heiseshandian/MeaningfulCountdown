import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageEventEmitter } from "./events";
import { IMAGES_CHANGED_EVENT } from "./constants";

export const storeImages = async (images) => {
  try {
    const jsonValue = JSON.stringify(images);
    await AsyncStorage.setItem("@unique_images_key", jsonValue);

    storageEventEmitter.emit(IMAGES_CHANGED_EVENT, images);
  } catch (e) {
    console.log("e", e);
  }
};

export const getImages = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@unique_images_key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("e", e);
  }
};
