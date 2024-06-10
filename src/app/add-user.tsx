import { img_network, img_radial } from "@/assets/images";
import { Btn } from "@/components";
import { useStore } from "@/hooks";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default () => {
  const [username, setUsername] = useState("");
  const { addStore, getStore } = useStore();

  useEffect(() => {
    (async () => {
      const prevUser = await getStore("USERNAME");
      if (prevUser) {
        // router.replace("/home");
        setUsername(prevUser);
      }
    })();
  }, []);

  const handleNext = async () => {
    await addStore("USERNAME", username).then(() => router.navigate("home"));
  };
  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <ScrollView
        className="flex-1 pt-20 bg-white"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="relative flex-1 px-5 h-sreen">
          <Image
            source={img_network}
            className="w-3/4 h-64"
            contentFit="contain"
          />
          <View className="absolute z-50 w-2/3 h-96 -right-11 ">
            <Image
              source={img_radial}
              className="w-full h-full"
              contentFit="contain"
            />
          </View>
          <Animated.View entering={FadeInDown.duration(500)} className="mt-20">
            <Text className="text-lg font-semibold ">
              Create a Profile To track your progress
            </Text>
            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Enter your username"
              placeholderTextColor={"gray"}
              className="p-3 my-6 text-base font-semibold border rounded-md border-muted/60 "
              keyboardAppearance="light"
            />
          </Animated.View>
          <Btn
            txt="continue to learn"
            onPress={async () => await handleNext()}
          />
          <Btn
            className="mt-3 bg-transparent border border-primary"
            onPress={() => router.back()}
          >
            <Text className="text-primary">Close</Text>
          </Btn>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
