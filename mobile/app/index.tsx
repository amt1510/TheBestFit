import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function HomeScreen() {
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 20 }}>
        Enter measurements
      </Text>

      {/* Gender toggle */}
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        {["male", "female"].map((g) => (
          <Pressable
            key={g}
            onPress={() => setGender(g as "male" | "female")}
            style={{
              flex: 1,
              padding: 14,
              marginRight: g === "male" ? 10 : 0,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#000",
              backgroundColor: gender === g ? "#000" : "#fff",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: gender === g ? "#fff" : "#000",
                fontWeight: "500",
              }}
            >
              {g.toUpperCase()}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Your inputs here */}
      <TextInput placeholder="Enter weight (kg)" style={inputStyle} />
      <TextInput placeholder="Enter height (m)" style={inputStyle} />
      <TextInput placeholder="Shoulders (cm)" style={inputStyle} />
      <TextInput placeholder="Chest (cm)" style={inputStyle} />
      <TextInput placeholder="Waist (cm)" style={inputStyle} />

      {/* Next button */}
      <Pressable
        onPress={() => router.push("/measurements")}
        style={{
          marginTop: "auto",
          backgroundColor: "#000",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          NEXT
        </Text>
      </Pressable>
    </View>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 6,
  padding: 12,
  marginBottom: 12,
};
