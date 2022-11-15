import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeImages = async (images) => {
  try {
    const jsonValue = JSON.stringify(images);
    await AsyncStorage.setItem("@unique_images_key", jsonValue);
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
