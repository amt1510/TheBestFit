import { View, Text, TextInput, Pressable } from "react-native";
import { OnboardingData } from "./types";

type StepOneProps = {
  data: OnboardingData;
  onChange: (data: OnboardingData) => void;
  onNext: () => void;
};

export default function MeasurementsStep({
  data,
  onChange,
  onNext,
}: StepOneProps) {
  const update = (key: keyof OnboardingData, value: number) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
            <Text style={titleStyle}>Enter measurements</Text>

            <TextInput
              placeholder="Weight (kg)"
              style={inputStyle}
              keyboardType="numeric"
              onChangeText={(v) => update("weight", Number(v))}
            />

            <TextInput
              placeholder="Height (cm)"
              style={inputStyle}
              keyboardType="numeric"
              onChangeText={(v) => update("height", Number(v))}
            />

            <TextInput
              placeholder="Shoulders (cm)"
              style={inputStyle}
              keyboardType="numeric"
              onChangeText={(v) => update("shoulders", Number(v))}
            />

            <TextInput
              placeholder="Chest (cm)"
              style={inputStyle}
              keyboardType="numeric"
              onChangeText={(v) => update("chest", Number(v))}
            />

            <TextInput
              placeholder="Waist (cm)"
              style={inputStyle}
              keyboardType="numeric"
              onChangeText={(v) => update("waist", Number(v))}
            />

            <TextInput
              placeholder="Hip (cm)"
              style={inputStyle}
              keyboardType="numeric"
              onChangeText={(v) => update("hip", Number(v))}
            />

      </View>
      <View style={styles.footer}>
            <Pressable style={buttonStyle} onPress={onNext}>
              <Text style={buttonText}>Next</Text>
            </Pressable>
      </View>
    </View>
  );
}

const styles = {
  screen: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  footer: {
    paddingBottom: 20,
  },
};


const titleStyle = {
  fontSize: 22,
  marginBottom: 20,
};

const inputStyle = {
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 6,
  padding: 12,
  marginBottom: 12,
};

const buttonStyle = {
  backgroundColor: "#000",
  padding: 14,
  borderRadius: 6,
  alignItems: "center",
  marginTop: 20,
};

const buttonText = {
  color: "#fff",
  fontSize: 16,
};
