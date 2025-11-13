import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import tw from 'twrnc';
import ZodiacSignSection from './components/ZodiacSignSection';
import ConsultWithExpertSection from './components/ConsultWithExpertSection';
import ComboOffersScreen from './components/ComboOffer';

const HomeScreen = () => {
  return (
    <ScrollView
      style={tw`flex-1 bg-white`}
      showsVerticalScrollIndicator={false} // ✅ hide scrollbar
      overScrollMode="never" // ✅ remove top/bottom glow (Android)
      bounces={false}
    >
      <HeroSection />
      <ServiceSection />
      <ZodiacSignSection />
      <ConsultWithExpertSection />
      <ComboOffersScreen />
    </ScrollView>
  );
};

export default HomeScreen;
