import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../Context/ThemContext"; // ✅ Use your theme context
import tw from "twrnc";

const { width } = Dimensions.get("window");

export default function Header({ title, showBack = true }) {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  return (
    <View
      style={[
        tw`flex-row items-center justify-between px-4`,
        {
          backgroundColor: isDark ? "#0F172A" : "#FFF",
          paddingTop: Platform.OS === "ios" ? 55 : 20,
          paddingBottom: 15,
          borderBottomWidth: 1,
          borderColor: isDark ? "#1E293B" : "#E5E7EB",
          width: width,
          elevation: 4,
          shadowColor: isDark ? "#000" : "#999",
        },
      ]}
    >
      {/* 🔙 Back Button */}
      {showBack ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`p-2 rounded-full`}
        >
          <Icon
            name={Platform.OS === "ios" ? "chevron-back" : "arrow-back"}
            size={24}
            color={isDark ? "#FACC15" : "#EA580C"}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 36 }} /> // Placeholder for layout balance
      )}

      {/* 🧿 Title */}
      <Text
        style={[
          tw`text-lg font-bold text-center`,
          {
            flex: 1,
            color: isDark ? "#FACC15" : "#EA580C",
            textAlign: "center",
          },
        ]}
        numberOfLines={1}
      >
        {title}
      </Text>
      {/* Empty space to balance layout */}
      <View style={{ width: 36 }} />
    </View>
  );
}
