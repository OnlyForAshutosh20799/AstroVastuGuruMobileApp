import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import tw from "twrnc";

export default function HeroSection() {
  return (
    <LinearGradient
      colors={["#FFF8E1", "#FFD54F", "#FFA000"]} // white-golden-saffron gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={tw`rounded-b-3xl pb-10 pt-12 px-6 shadow-lg`}
    >
      <View style={tw`items-center`}>
        {/* 🔮 Astrology Image */}
        {/* <Image
          source={require("../../assets/images/hero.png")}
          style={[
            tw`w-56 h-56 mb-3`,
            { shadowColor: "#FFD700", shadowOpacity: 0.4, shadowRadius: 10 },
          ]}
          resizeMode="contain"
        /> */}

        {/* 🌟 Title */}
        <Text
          style={[
            tw`text-3xl font-extrabold text-white mt-2 tracking-wide`,
            {
              textShadowColor: "#D97706",
              textShadowOffset: { width: 1, height: 2 },
              textShadowRadius: 6,
            },
          ]}
        >
          AstroVastuGuru 🔯
        </Text>

        {/* ✨ Tagline */}
        <Text
          style={tw`text-white text-center mt-3 text-base leading-6 opacity-90`}
        >
          Discover your stars, balance your space, and unlock cosmic energy.
        </Text>

        {/* 🌕 Call to Action */}
        <TouchableOpacity
          style={[
            tw`mt-6 px-8 py-3 rounded-full flex-row items-center`,
            {
              backgroundColor: "#FF9933",
              shadowColor: "#FFD700",
              shadowOpacity: 0.6,
              shadowRadius: 8,
            },
          ]}
          activeOpacity={0.85}
        >
          <Text style={tw`text-white font-bold text-lg`}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
