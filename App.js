import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen";
import { ImageScreen } from "./components/ImageScreen";
import { HOME_SCREEN_NAME, IMAGE_SCREEN_NAME } from "./utils/constants";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN_NAME}
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name={IMAGE_SCREEN_NAME}
          component={ImageScreen}
          options={{ title: "Preview Images" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
