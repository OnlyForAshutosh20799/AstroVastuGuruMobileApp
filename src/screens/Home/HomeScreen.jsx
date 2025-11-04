import React from "react";
import { View, ScrollView, Text } from "react-native";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import tw from "twrnc";
import ZodiacSignSection from "./components/ZodiacSignSection";

const HomeScreen = () => {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <HeroSection />
      <ServiceSection />
      <ZodiacSignSection />
    </ScrollView>
  );
};

export default HomeScreen;
