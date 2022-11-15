import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getCurrentDate, getRestDay } from "../utils/date";
import { ExpoImagePicker } from "./ExpoImagePicker";

export function HomeScreen({ navigation }) {
  const verticalPlaceHolder = (height) => <View style={{ height }}></View>;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>调回常德还有</Text>
      <Text style={{ ...styles.text, ...styles.special }}>
        {getRestDay()}天
      </Text>
      <Text style={styles.text}>{getCurrentDate()}</Text>

      {verticalPlaceHolder(20)}

      <ExpoImagePicker navigation={navigation} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#F14C6A",
    fontSize: 40,
  },
  special: {
    fontSize: 80,
  },
  btn: {
    fontSize: 20,
  },
});
