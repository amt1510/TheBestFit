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

  function mapGenderToApi(gender: "male" | "female") {
      if (gender === "male") return 0;
      if (gender === "female") return 1;
      throw new Error("Invalid gender value");
  }


  const finishOnboarding = async () => {
    try {
      if (data.gender === null || data.gender === undefined) {
        throw new Error("Gender not selected");
      }

      const apiPayload = {
        gender: mapGenderToApi(data.gender),
        measurements: {
          height: data.height ?? 0,
          weight: data.weight ?? 0,
          chest: data.chest ?? 0,
          shoulders: data.shoulders ?? 0,
          waist: data.waist ?? 0,
          hips: data.hips ?? 0,
        },
        modelVersion: 0,
        name: "test-avatar",
      };

      // Send to backend
      const res = await fetch("http://10.0.2.2:3000/api/avatars/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API failed: ${res.status} ${text}`);
      }

      // Persist original UI-friendly data locally
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
