import React, { useState, useEffect } from "react";
import { Image, TouchableHighlight } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Ionicons";
import { storeImages, getImages } from "../utils/storage";
import { IMAGE_SCREEN_NAME } from "../utils/constants";

export function ExpoImagePicker({ navigation }) {
  const [image, setImage] = useState(null);

  // Init image from the storage
  useEffect(() => {
    getImages().then((images) => {
      if (images) {
        setImage(images[0]);
      }
    });
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      const previousImages = (await getImages()) || [];
      const toStoredImages = [result.assets[0].uri, ...previousImages];
      storeImages(toStoredImages);
    }
  };

  return (
    <>
      <Icon name="ios-add" size={30} onPress={pickImage} />
      {image && (
        <TouchableHighlight
          onPress={() => navigation.navigate(IMAGE_SCREEN_NAME)}
        >
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </TouchableHighlight>
      )}
    </>
  );
}
