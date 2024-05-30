import { QuestionItem } from "@/components";
import { cn } from "@/utils";
import { QUESTIONS, TAcceptedLanguage } from "@/utils/constants";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
export default () => {
  const { id, language } = useLocalSearchParams();
  const _id = id as string;

  const validLanguage = ((language as string) ||
    "English") as TAcceptedLanguage;

  const AcceptedLanguages = ["English", "French"] as TAcceptedLanguage[];
  const _language = AcceptedLanguages.includes(validLanguage)
    ? validLanguage
    : "English";

  const validId = parseInt(_id);

  return (
    <ScrollView className="px-5 pt-20 bg-background dark:bg-black" >
      <Stack.Screen
        options={{
          headerTitle: `Question ${validId + 1}`,
          headerLeft: () => (
            <View
              className={cn(
                "px-2 py-1 rounded-full bg-primary/10",
                _language === "French" && "bg-green-500/10"
              )}
            >
              <Text
                className={cn(
                  "text-sm text-primary font-semibold",
                  _language === "French" && "text-green-500"
                )}
              >
                {_language}
              </Text>
            </View>
          ),
        }}
      />
      <QuestionItem
        question={QUESTIONS[_language][validId].question}
        answer={"D"}
        tense={QUESTIONS[_language][validId].tense}
        i={validId}
        language={_language}
        options={QUESTIONS[_language][validId].options}
        onPress={() => null}
        
      />
    </ScrollView>
  );
};
