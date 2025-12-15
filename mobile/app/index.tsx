import { View } from "react-native";
import { useState } from "react";

// import steps
import MeasurementsStep from "@/components/measurements";
import GenderStep from "@/components/gender_selection";
import PhotoStep from "@/components/profile";

// import type
import { OnboardingData } from "@/types/onboarding";

export default function HomeScreen() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({});

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

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
          onFinish={() => {
            console.log('Final payload:', data);
          }}
        />
      )}
    </View>
  );
}
