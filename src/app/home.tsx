import { img_animal, img_english, img_french, img_math } from "@/assets/images";
import { Btn } from "@/components";
import { useStore } from "@/hooks";
import { cn } from "@/utils";
import { Image, ImageSource } from "expo-image";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Animated, { ZoomInDown } from "react-native-reanimated";

export default () => {
  const TOPIC_ITEMS = [
    "science",
    "technology",
    "animals",
    "language",
    "cultures",
    "sport",
  ].map((item) => ({ label: item, active: false }));

  const TOPICS = [
    {
      count: 30,
      image: img_english,
      label: "english",
      href: "English",
    },
    {
      image: img_french,
      label: "french",
      href: "French",
      count: 30,
    },
    { image: img_animal, label: "animals", href: "Animals", count: 15 },
    { image: img_math, label: "mathematics", href: "Mathematics", count: 20 },
    { image: img_math, label: "programming", href: "Programming", count: 25 },
  ] as const satisfies TopicCardProps[];
  const [active, setActive] = useState(0);

  const [user, setUser] = useState("");

  const { getStore } = useStore();
  useEffect(() => {
    (async () => {
      const user = await getStore("USERNAME");
      if (user) {
        setUser(user);
      }
    })();
  }, []);
  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-black"
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <Stack.Screen
        options={{
          headerRight: () =>
            user ? (
              <Btn className="h-8 p-1.5 rounded-full">
                <Text
                  numberOfLines={1}
                  className="max-w-[150] font-semibold text-white "
                >
                  @{user}
                </Text>
              </Btn>
            ) : null,
        }}
      />
      <SafeAreaView className="flex-1 h-screen">
        <FlatList
          data={TOPIC_ITEMS}
          horizontal
          contentContainerStyle={[
            Platform.select({
              android: {
                paddingTop: 12,
              },
            }),
            {
              paddingHorizontal: 20,
            },
          ]}
          className="max-h-14 "
          keyExtractor={(_, i) => i.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Btn
              onPress={() => setActive(index)}
              className={cn(
                "p-2 mr-3.5 bg-transparent border border-muted/40 rounded-full h-9",
                {
                  "bg-primary border-primary": active === index,
                }
              )}
            >
              <Text
                className={cn(
                  "font-semibold capitalize dark:text-muted",
                  active === index && "text-white"
                )}
              >
                {item.label}
              </Text>
            </Btn>
          )}
        />
        <FlatList
          data={TOPICS}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={ZoomInDown.duration(500)
                .delay(index * 100)
                .springify()
                .mass(0.5)}
              className="flex-1"
            >
              <TopicCard
                key={index.toString()}
                {...item}
                onPress={() =>
                  item.href === "Animals"
                    ? router.navigate(`questions/animals`)
                    : router.navigate(`questions?language=${item.href}`)
                }
              />
            </Animated.View>
          )}
          contentContainerStyle={{
            padding: 20,
          }}
          numColumns={2}
          columnWrapperStyle={{
            columnGap: 8,
            justifyContent: "space-evenly",
          }}
          ItemSeparatorComponent={() => <View className="h-2" />}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

interface TopicCardProps extends TouchableOpacityProps {
  label: string;
  href: string;
  count: number;
  image: ImageSource;
}
const TopicCard = ({
  className,
  image,
  count,
  label,
  ...props
}: TopicCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className={cn(
        "flex-1 p-2 bg-white dark:bg-[#191919] rounded-lg shadow-sm active:scale-95",
        className
      )}
      {...props}
    >
      <View className="flex-row items-center justify-between">
        <Text
          numberOfLines={1}
          className="text-lg font-semibold capitalize text-primary dark:text-white"
        >
          {label}
        </Text>
        <Text className="dark:text-white">•{count}</Text>
      </View>
      <Image source={image} className="mx-auto mt-2 rounded w-28 h-28" />
    </TouchableOpacity>
  );
};
