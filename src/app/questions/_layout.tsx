import { Stack } from "expo-router";
import { Platform, useColorScheme } from "react-native";
import { BlurEffectTypes } from "react-native-screens";

export default () => {
  const theme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Questions",
          headerLargeTitle: true,
          headerSearchBarOptions: {},
          headerTransparent: Platform.OS === "ios",
          headerShadowVisible: false,
          headerBlurEffect: theme as BlurEffectTypes,
          headerTitleStyle: {
            color: theme === "dark" ? "white" : "black",
          },
          headerLargeTitleStyle: {
            color: theme === "dark" ? "white" : "black",
          },
          headerLargeStyle: {
            backgroundColor: theme === "dark" ? "black" : "white",
          },
        }}
      />
      <Stack.Screen
        name="animals"
        options={{
          headerTitle: "Animals",
          headerLargeTitle: true,
          headerSearchBarOptions: {},
          headerTransparent: Platform.OS === "ios",
          headerShadowVisible: false,
          headerBlurEffect: theme as BlurEffectTypes,
          headerTitleStyle: {
            color: theme === "dark" ? "white" : "black",
          },
          headerLargeTitleStyle: {
            color: theme === "dark" ? "white" : "black",
          },
          headerLargeStyle: {
            backgroundColor: theme === "dark" ? "black" : "white",
          },
        }}
      />
    </Stack>
  );
};
