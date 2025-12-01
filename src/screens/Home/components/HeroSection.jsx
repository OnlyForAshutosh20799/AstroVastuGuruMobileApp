// src/components/HeroSection.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import { useTheme } from "../../../Context/ThemContext";
import { useNavigation } from "@react-navigation/native";

export default function HeroSection() {
  const { theme } = useTheme();

  const isDark = theme.mode === "dark";
  
const navigation = useNavigation();

  // 🧩 Common header content
  const Header = () => (
    <View style={tw`flex-row items-center justify-between mb-6`}>
    

      <View>
        <Text style={[tw`text-lg font-semibold`, { color: theme.text }]}>
          Hi, Ashutosh 👋
        </Text>
        <Text style={[tw`text-sm`, { color: theme.subText }]}>
          Welcome to AstroVastuGuru
        </Text>
      </View>
        <TouchableOpacity activeOpacity={0.8}>
        {/* <Ionicons name="menu-outline" size={28} color={theme.text} /> */}
      </TouchableOpacity>
    </View>
  );

  // 🧩 Hero text content
  const HeroText = () => (
    <View style={tw`items-center`}>
      <Text
        style={[
          tw`text-3xl font-extrabold text-center mt-2 tracking-wide`,
          {
            color: theme.text,
            textShadowColor: isDark ? "#000" : "#D97706",
            textShadowOffset: { width: 1, height: 2 },
            textShadowRadius: 6,
          },
        ]}
      >
        AstroVastuGuru 🔯
      </Text>
      <Text
        style={[
          tw`text-center mt-3 text-base leading-6 opacity-90`,
          { color: theme.subText },
        ]}
      >
        Discover your stars, balance your space, and unlock cosmic energy.
      </Text>
    </View>
  );

  return isDark ? (
    // 🌙 DARK MODE → solid background
    <View
      style={[
        tw` pb-10 pt-12 px-6 shadow-lg`,
        { backgroundColor: "#121212" },
      ]}
    >
      <Header />
      <HeroText />
    </View>
  ) : (
    // ☀️ LIGHT MODE → gradient background
    <LinearGradient
      colors={theme.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={tw`rounded-b-3xl pb-10 pt-12 px-6 `}
    >
      <Header />
      <HeroText />
    </LinearGradient>
  );
}
