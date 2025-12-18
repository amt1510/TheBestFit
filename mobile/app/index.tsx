import { View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

// steps
import MeasurementsStep from "@/components/measurements";
import GenderStep from "@/components/gender_selection";
import PhotoStep from "@/components/profile";

// types
import { OnboardingData } from "@/types/onboarding";

export default function IndexScreen() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({});
  const [checking, setChecking] = useState(true);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  // Check onboarding completion ONCE
  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await AsyncStorage.getItem(
        "onboardingCompleted"
      );
      if (completed === "true") {
        router.replace("/home");
      } else {
        setChecking(false);
      }
    };

    checkOnboarding();
  }, []);

  const finishOnboarding = async () => {
    try {
      await AsyncStorage.setItem(
        "onboardingData",
        JSON.stringify(data)
      );
      await AsyncStorage.setItem(
        "onboardingCompleted",
        "true"
      );

      router.replace("/home");
    } catch (err) {
      console.error("Failed to finish onboarding", err);
    }
  };

  // Prevent UI flicker while checking storage
  if (checking) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      {step === 1 && (
        <MeasurementsStep
          data={data}
          onChange={setData}
          onNext={next}
        />
      )}

      {step === 2 && (
        <GenderStep
          data={data}
          onChange={setData}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 3 && (
        <PhotoStep
          data={data}
          onChange={setData}
          onBack={back}
          onFinish={finishOnboarding}
        />
      )}
    </View>
  );
}
