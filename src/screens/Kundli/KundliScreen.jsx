import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const KundliScreen = () => (
  <View style={tw`flex-1 bg-white justify-center items-center p-5`}>
    <Text style={tw`text-2xl font-bold text-orange-600 mb-3`}>Kundli Report</Text>
    <Text style={tw`text-gray-600 mb-6 text-center`}>
      Generate your detailed Kundli using your birth details.
    </Text>
    <TouchableOpacity style={tw`bg-orange-500 px-6 py-3 rounded-xl`}>
      <Text style={tw`text-white font-semibold`}>Create Kundli</Text>
    </TouchableOpacity>
  </View>
);

export default KundliScreen;
