import { Btn } from "@/components";
import { QuestionsProvider } from "@/components/providers";
import { useStore } from "@/hooks";
import Icon from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { Text, useColorScheme, View } from "react-native";
import { BlurEffectTypes } from "react-native-screens";

export default function RootLayout() {
  const theme = useColorScheme();

  
  const TimeDown = () => {
    return (
      <View>
        <Text className="text-base font-bold dark:text-background">{15}</Text>
      </View>
    );
  };
  return (
    <QuestionsProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="learn"
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: "transparent",
            },
            headerLeft: () => (
              <Btn
                className="w-20 p-0 pr-2 rounded-full justify-sart h-11 bg-white/10 dark:bg-black/10"
                onPress={() => router.back()}
              >
                <Icon
                  name="chevron-back"
                  className="w-0 text-lg text-white bg-red-600"
                  color={"white"}
                  size={25}
                />
                <Text className="text-sm font-semibold text-background">
                  Home
                </Text>
              </Btn>
            ),
          }}
        />
        <Stack.Screen
          name="questions/index"
          options={{
            headerTitle: "Questions",
            headerLargeTitle: true,
            headerSearchBarOptions: {},
            headerTransparent: true,
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
            headerRight: () => <TimeDown />,
          }}
        />
        <Stack.Screen
          name="questions/[id]"
          options={{
            presentation: "modal",
            headerShadowVisible: false,
            headerTransparent: true,
            headerBlurEffect: theme as BlurEffectTypes,
            headerTitleStyle: {
              color: theme === "dark" ? "white" : "black",
            },
            headerRight: () => (
              <Btn
                onPress={() => router.back()}
                className="px-1 py-1 rounded-full h-7 width-7 bg-black/5"
              >
                <Icon name="close-outline" size={20} />
              </Btn>
            ),
          }}
        />
      </Stack>
    </QuestionsProvider>
  );
}
