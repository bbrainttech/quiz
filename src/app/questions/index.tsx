import { QuestionItem } from "@/components";
import { useStore } from "@/hooks";
import { QUESTIONS, TAcceptedLanguage, TQuestion } from "@/utils/constants";
import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { FlatList, ListRenderItem, View } from "react-native";
import Animated, { ZoomInDown } from "react-native-reanimated";
export default () => {
  const { language } = useLocalSearchParams();

  const validLanguage = ((language as string) ||
    "English") as TAcceptedLanguage;

  const AcceptedLanguages = ["English", "French"] as TAcceptedLanguage[];
  const _language = AcceptedLanguages.includes(validLanguage)
    ? validLanguage
    : "English";

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
          language={_language}
        />
      </Animated.View>
    );
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            placeholder: `Search ${_language} questions`,
          },
        }}
      />
      <StatusBar hidden={false} />
      <FlatList
        data={QUESTIONS[_language]}
        renderItem={renderItem}
        className="flex-1 px-5 bg-background dark:bg-black"
        contentContainerStyle={{
          paddingVertical: 15,
        }}
        keyExtractor={({}, index) => index.toString()}
        contentInsetAdjustmentBehavior="automatic"
        ItemSeparatorComponent={() => (
          <View className="h-[.5px] my-7 bg-muted/60 dark:bg-muted/60" />
        )}
      />
    </>
  );
};
