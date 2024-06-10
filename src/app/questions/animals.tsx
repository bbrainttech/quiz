import { QuestionItem } from "@/components";
import { useStore } from "@/hooks";
import { ANIMAL_QUESTIONS, TQuestion } from "@/utils/constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { FlatList, ListRenderItem, SafeAreaView, View } from "react-native";
import Animated, { ZoomInDown } from "react-native-reanimated";
export default () => {

  const { getStore } = useStore();

  useEffect(() => {
    (async () => {
      const val = await getStore("");
      if (val) {
        console.log(JSON.parse(val));
      }
    })();
  }, []);

  const renderItem: ListRenderItem<TQuestion> = ({ item, index }) => {
    return (
      <Animated.View
        entering={ZoomInDown.duration(500)
          .delay(index * 100)
          .springify()
          .mass(0.5)}
      >
        <QuestionItem
          key={index.toString()}
          {...item}
          i={index}
          language={'English'}
        />
      </Animated.View>
    );
  };
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            placeholder: `Search animales questions`,
          },
        }}
      />
      <StatusBar hidden={false} />
      <FlatList
        data={ANIMAL_QUESTIONS}
        renderItem={renderItem}
        className="flex-1 bg-background dark:bg-black"
        contentContainerStyle={{
          padding: 18,
        }}
        keyExtractor={({}, index) => index.toString()}
        contentInsetAdjustmentBehavior="automatic"
        ItemSeparatorComponent={() => (
          <View className="h-[.5px] my-7 bg-muted/60 dark:bg-muted/60" />
        )}
      />
    </SafeAreaView>
  );
};
