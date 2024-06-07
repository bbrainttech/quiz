import { img_network } from "@/assets/images";
import { Btn } from "@/components";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Index() {
  const { bottom } = useSafeAreaInsets();
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-1 h-screen ">
        <View className="mt-20 h-1/2 mx-auto w-[90%]">
          <Animated.View entering={FadeInDown.duration(400)}>
            <Image
              source={img_network}
              className="w-full h-full"
              contentFit="contain"
            />
          </Animated.View>
        </View>
        <View className="flex-1 px-5 mt-16">
          <Animated.Text
            entering={FadeInDown.duration(400)}
            className="text-4xl font-bold text-center"
          >
            Learning has never been easy with{" "}
            <Text className="text-primary">QuizeIT</Text>
          </Animated.Text>
          <Animated.View
            entering={SlideInDown.duration(500)
              .springify()
              .mass(0.4)
              .delay(300)}
            className="justify-end flex-1"
            style={{ paddingBottom: bottom + 5 }}
          >
            <Btn
              txt="get started"
              onPress={() => router.navigate("add-user")}
            />
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}
