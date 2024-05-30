import { img_library } from "@/assets/images";
import { Btn } from "@/components";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-background dark:bg-black">
      <StatusBar animated hidden />
      <View className="relative overflow-hidden h-1/2">
        <View className="overflow-hidden w-[545] -top-24 h-[545] bg-primary rounded-full -left-[75px] absolute">
          <Image
            contentFit="contain"
            source={img_library}
            className="h-[450px] ml-28 mt-[95] -mr-5"
          />
        </View>
      </View>
      <View className="relative flex-1 pt-5 mx-4">
        <Text className="mt-10 text-2xl font-semibold text-center dark:text-background">
          Start learning by selecting the langauge you want to take a quize on.
        </Text>
        <View
          className="justify-end flex-1 gap-y-3"
          style={{ paddingBottom: bottom }}
        >
          <Btn
            className="bg-transparent border border-primary"
            onPress={() => router.navigate("questions?language=English")}
          >
            <Text className="text-lg font-semibold text-primary">English</Text>
          </Btn>
          <Btn
            txt="french"
            onPress={() => router.navigate("questions?language=French")}
          />
        </View>
      </View>
    </View>
  );
};
