import { useHaptics, useQuestions } from "@/hooks";
import { cn } from "@/utils";
import {
  TAcceptedLanguage,
  TAnswers,
  TOption,
  TQuestion,
} from "@/utils/constants";
import { useEffect, useState } from "react";
import {
  FlatList,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

type QuestionItemProps = TQuestion &
  ViewProps & { i: number; language: TAcceptedLanguage };

export default ({
  language,
  question,
  answer,
  options,
  tense,
  i,
  ...props
}: QuestionItemProps) => {
  const [hasSelectAnswer, setHasSelectAnswer] = useState(false);

  const haptics = useHaptics();

  interface TOnPress {
    e: GestureResponderEvent;
    selectedOption: TOption<TAnswers>["label"];
  }

  const [showPlus, setShowPlus] = useState(false);

  const { addQuestion } = useQuestions();
  const handlePress = ({ e, selectedOption }: TOnPress) => {
    console.log(`Selected : ${selectedOption} ----- Answer : ${answer}`);
    addQuestion({ answer, language, options, question, tense });
    haptics.selection();
    if (selectedOption === answer) setShowPlus(true);
  };

  const [showSate, setShowState] = useState(hasSelectAnswer);
  useEffect(() => {
    setShowState(hasSelectAnswer);
    if (hasSelectAnswer) {
      const timeout = setTimeout(() => setShowState(false), 7500);
      return () => clearTimeout(timeout);
    }
  }, [hasSelectAnswer]);
  const numbering = i + 1;

  const PopUpItem = ({ item = "🥰" }: { item?: string }) => (
    <Animated.View
      className="absolute z-50 items-center justify-center p-1 bg-white rounded-full shadow-lg h-14 w-14"
      entering={FadeInDown.duration(2000).springify().mass(0.3)}
      exiting={FadeOutDown.duration(2000).springify().mass(0.3)}
    >
      <Text className="text-4xl font-semibold text-center ">{item}</Text>
    </Animated.View>
  );
  return (
    <View {...props}>
      {showSate && (showPlus ? <PopUpItem /> : <PopUpItem item="😪" />)}
      <View className="flex-row gap-x-2">
        <Text className="text-lg font-bold dark:text-background">
          {numbering}&#41;
        </Text>
        <Text className="max-w-[85%] pr-3 text-lg font-semibold dark:text-background">
          {createQuestion(question, tense)}
        </Text>
      </View>
      <FlatList
        data={options}
        numColumns={2}
        keyExtractor={({}, index) => index.toString()}
        className="mt-3.5"
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={() => <View className="h-2" />}
        renderItem={({ item, index }) => (
          <AnswerItem
            key={index.toString()}
            {...item}
            answer={answer}
            onPressIn={() => setHasSelectAnswer(true)}
            onPress={(e) => {
              handlePress({ e, selectedOption: item.label });
            }}
            disabled={hasSelectAnswer}
            className={cn(
              hasSelectAnswer &&
                (item.label === answer
                  ? "bg-green-600 border-green-600"
                  : "border-red-600")
            )}
            state={
              hasSelectAnswer &&
              (item.label === answer ? "text-white font-bold" : "text-red-500")
            }
          />
        )}
      />
    </View>
  );
};

type AnswerItemProps = TOption<TAnswers> &
  TouchableOpacityProps & { answer: TAnswers; state: string | boolean };
const AnswerItem = ({
  label,
  option,
  answer,
  state,
  className,
  ...props
}: AnswerItemProps) => {
  return (
    <TouchableOpacity
      className={cn(
        "flex-row items-center border border-transparent w-1/2 p-2 disabled:opacity-25 rounded shadow bg-background dark:bg-[#151515] shadow-[#0001]  dark:shadow-none gap-x-2",
        className
      )}
      {...props}
    >
      <Text className={cn("text-base font-bold dark:text-white", state)}>{label}&#41;</Text>
      <Text className={cn("text-base dark:text-background", state)}>
        {option}
      </Text>
    </TouchableOpacity>
  );
};

/**
 *
 * @param question Qestion to display
 * @param tence Question tence
 * @returns Formates question with tence
 */
const createQuestion = (question: string, tense?: string) => {
  if (!(tense || question.includes("__TENSE__"))) return question;
  const newQuestion = question.replace(/__TENSE__/g, ` ____ (${tense})`);

  return newQuestion;
};
