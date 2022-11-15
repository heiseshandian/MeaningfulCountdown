import ImageViewer from "react-native-image-zoom-viewer";
import React, { useState, useEffect } from "react";
import { getImages, storeImages } from "../utils/storage";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";

export function ImageScreen({ navigation }) {
  const [images, setImages] = useState(null);

  useEffect(() => {
    getImages().then((urls) => {
      console.log("urls", urls);
      if (urls) {
        setImages(urls.map((url) => ({ url })));
      }
    });
  }, []);

  if (!images) {
    return null;
  }

  const imageViewerRef = React.createRef();
  const deleteCurrentImage = () => {
    const imageViewerInstance = imageViewerRef.current;
    if (!imageViewerInstance) {
      return;
    }

    const { currentShowIndex } = imageViewerInstance.state;

    const copy = images.slice();
    copy.splice(currentShowIndex, 1);

    if (copy.length === 0) {
      navigation.goBack();
      return;
    }

    setImages(copy);
    storeImages(copy);
  };

  return (
    <ImageViewer
      ref={imageViewerRef}
      imageUrls={images}
      menus={({ cancel }) => {
        return (
          <>
            <View style={styles.menuContent}>
              <TouchableHighlight
                underlayColor="#F2F2F2"
                onPress={() => {
                  deleteCurrentImage();
                  cancel();
                }}
                style={styles.operateContainer}
              >
                <Text style={styles.operateText}>delete</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="#F2F2F2"
                onPress={cancel}
                style={styles.operateContainer}
              >
                <Text style={styles.operateText}>cancel</Text>
              </TouchableHighlight>
            </View>
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  operateText: { color: "#333", fontSize: 17 },
  menuContent: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    zIndex: 11,
  },
  operateContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 6,
  },
});
