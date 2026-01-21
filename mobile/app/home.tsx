import { View, Text } from "react-native";

export default function HomeScreen() {


  return (
      <View style={styles.screen}>
          <View style={styles.content}>
                <Text style={titleStyle}>Home</Text>

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
