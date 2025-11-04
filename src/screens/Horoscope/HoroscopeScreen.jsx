import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";

const HoroscopeScreen = () => {
  const zodiacs = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  return (
    <ScrollView style={tw`flex-1 bg-white p-5`}>
      <Text style={tw`text-2xl font-bold text-orange-600 mb-4`}>
        Daily Horoscope
      </Text>
      {zodiacs.map((z, i) => (
        <View
          key={i}
          style={tw`bg-orange-50 rounded-xl p-4 mb-3 border border-orange-200`}
        >
          <Text style={tw`text-lg font-semibold text-gray-800`}>{z}</Text>
          <Text style={tw`text-gray-600 mt-1`}>
            Today brings new opportunities and positivity for {z}.
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default HoroscopeScreen;
