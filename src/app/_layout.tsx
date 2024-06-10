import { Btn } from "@/components";
import { QuestionsProvider } from "@/components/providers";
import useBackgroundAudio from "@/hooks/use-background-audio";
import Icon from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, Text, useColorScheme, View } from "react-native";
import { BlurEffectTypes } from "react-native-screens";

export default function RootLayout() {
  const theme = useColorScheme();

  const { isPlaying, playAudio } = useBackgroundAudio();
  useEffect(() => {
    (async () => {
      await playAudio()
        .then(() => {
          console.log("Playing...");
        })
        .catch(() => {
          console.log("Error...");
        });
    })();
  }, []);
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
          name="add-user"
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            headerTitle: "Quiz",
            headerSearchBarOptions: {
              placeholder: "Search for a topic to learn",
            },
            headerBackVisible: false,
            headerLargeTitle: true,
            headerTransparent: Platform.OS === "ios",
            headerShadowVisible: false,
            presentation: "modal",
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
          name="learn"
          options={{
            headerTransparent: Platform.OS === "ios",
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
          name="questions"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QuestionsProvider>
  );
}
