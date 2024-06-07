import { Btn } from "@/components";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { welceomBg } from "../assets/images";
import Animated, { FadeInUp } from "react-native-reanimated";
export default function Index() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-background dark:bg-black">
      <StatusBar animated hidden />
      <View className="h-[62%] relative overflow-hidden">
        <View className="bottom-0 overflow-hidden w-[650px] -top-24 h-[645px] rounded-full left-[-100px] absolute bg-primary">
          <Image source={welceomBg} className="w-screen h-[90%] mt-16 ml-28" />
        </View>
      </View>
      <View className="relative flex-1 px-4 mt-5">
        <Text className="text-3xl font-semibold text-center dark:text-background">
          Explore Your Thoughts in <Text className="text-primary">English</Text>{" "}
          and <Text className="text-primary">French</Text>
        </Text>
        <Text className="my-5 text-base text-center text-muted">
          Welcome to our quize app were you strengthen your self in both English
          and French.
        </Text>

        <Animated.View
          entering={FadeInUp.duration(500).springify(0.4)}
          className="justify-end flex-1"
          style={{ marginBottom: bottom }}
        >
          <Btn txt="Continue" onPress={() => router.navigate("/learn")} />
        </Animated.View>
      </View>
    </View>
  );
}
