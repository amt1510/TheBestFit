import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { OnboardingData } from './types';

type StepThreeProps = {
  data: OnboardingData;
  onChange: (data: OnboardingData) => void;
  onBack: () => void;
  onFinish: () => void;
};

export default function PhotoStep({
  data,
  onChange,
  onBack,
  onFinish,
}: StepThreeProps) {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      onChange({ ...data, photoUri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.screen}>
     <View style={styles.content}>
      <Text style={styles.titleStyle}>Upload Photo (Optional)</Text>
 <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity onPress={pickImage}>
        {data.photoUri ? (
          <Image
            source={{ uri: data.photoUri }}
            style={{ width: 120, height: 120 }}
          />
        ) : (
          <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#ccc',
            }}
          />
        )}
      </TouchableOpacity>
      </View>
      </View>

      <View style={styles.footer}>
          <Pressable style={buttonStyle} onPress={onBack}>
            <Text style={buttonText}>Back</Text>
          </Pressable>
          <Pressable style={buttonStyle} onPress={onFinish}>
            <Text style={buttonText}>Finish</Text>
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