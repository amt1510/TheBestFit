import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { OnboardingData } from './types';

type StepTwoProps = {
  data: OnboardingData;
  onChange: (data: OnboardingData) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function GenderStep({
  data,
  onChange,
  onNext,
  onBack,
}: StepTwoProps) {
  const selectGender = (gender: 'male' | 'female') => {
    onChange({ ...data, gender });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={titleStyle}>Select Gender</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => selectGender('male')}>
              <Image
                source={require('../assets/images/male.png')}
                style={{
                  width: 100,
                  height: 100,
                  borderWidth: data.gender === 'male' ? 3 : 0,
                }}
              />

            </TouchableOpacity>

            <TouchableOpacity onPress={() => selectGender('female')}>
              <Image
                source={require('../assets/images/female.png')}
                style={{
                  width: 100,
                  height: 100,
                  borderWidth: data.gender === 'female' ? 3 : 0,
                }}
              />

            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={buttonStyle} onPress={onBack}>
          <Text style={buttonText}>Back</Text>
        </Pressable>
        <Pressable style={buttonStyle} onPress={onNext} disabled={!data.gender}>
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

const titleStyle = {
  fontSize: 22,
  marginBottom: 20,
};
