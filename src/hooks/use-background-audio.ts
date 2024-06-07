import { s5} from "@/assets/sounds";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useEffect, useState } from "react";
export default () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [sound, setSound] = useState<Sound | null>(null);
  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      interruptionModeIOS: InterruptionModeIOS.DuckOthers,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: true,
    });

    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  const playAudio = async (sound?:any) => {
    const { sound: newSound } = await Audio.Sound.createAsync(sound||s5, {
      isLooping: true,
    });
    setSound(newSound);

    setIsPlaying(true);
    await newSound.playAsync();

    newSound.setOnPlaybackStatusUpdate((status) => {
      if ("didJustFinish" in status && status.didJustFinish) {
        setIsPlaying(false);
      }
    });
  };
  return { isPlaying, setIsPlaying, playAudio };
};
