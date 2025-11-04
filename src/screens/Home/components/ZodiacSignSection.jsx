import React from "react";
import { View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import tw from "twrnc";

const { width } = Dimensions.get("window");
const numColumns = width > 768 ? 3 : 2; // tablets show 3 per row

const zodiacData = [
  { name: "Aries", date: "Mar 21 - Apr 19", tagline: "The Bold Trailblazer 🔥", color: ["#FF8008", "#FFC837"] },
  { name: "Taurus", date: "Apr 20 - May 20", tagline: "The Earthly Comfort Seeker 🌿", color: ["#A8E063", "#56AB2F"] },
  { name: "Gemini", date: "May 21 - Jun 20", tagline: "The Dual Dreamer 🌙", color: ["#36D1DC", "#5B86E5"] },
  { name: "Cancer", date: "Jun 21 - Jul 22", tagline: "The Gentle Guardian 💧", color: ["#FF5F6D", "#FFC371"] },
  { name: "Leo", date: "Jul 23 - Aug 22", tagline: "The Fearless Leader 🦁", color: ["#F7971E", "#FFD200"] },
  { name: "Virgo", date: "Aug 23 - Sep 22", tagline: "The Perfectionist Thinker 🌱", color: ["#11998E", "#38EF7D"] },
  { name: "Libra", date: "Sep 23 - Oct 22", tagline: "The Balancer of Worlds ⚖️", color: ["#DA22FF", "#9733EE"] },
  { name: "Scorpio", date: "Oct 23 - Nov 21", tagline: "The Mysterious Transformer 🦂", color: ["#EB3349", "#F45C43"] },
  { name: "Sagittarius", date: "Nov 22 - Dec 21", tagline: "The Freedom Seeker 🏹", color: ["#FFB75E", "#ED8F03"] },
  { name: "Capricorn", date: "Dec 22 - Jan 19", tagline: "The Ambitious Climber 🪴", color: ["#606c88", "#3f4c6b"] },
  { name: "Aquarius", date: "Jan 20 - Feb 18", tagline: "The Visionary Innovator 🌊", color: ["#43C6AC", "#191654"] },
  { name: "Pisces", date: "Feb 19 - Mar 20", tagline: "The Dreamy Healer 🐚", color: ["#00C9FF", "#92FE9D"] },
];

export default function ZodiacSignSection() {
  return (
    <View style={tw`bg-[#FFF8E7] px-4 py-6`}>
      {/* Header */}
      <Text style={tw`text-2xl text-center font-extrabold text-[#4B2800]`}>
        Discover Your <Text style={tw`text-[#FF9933]`}>Zodiac Sign ✨</Text>
      </Text>

      <Text
        style={tw`text-center text-[#6B4E16] mt-2 text-[13px] leading-5 font-medium`}
      >
        “Every star holds a secret — let’s uncover yours.”{"\n"}
        Get daily, monthly, and yearly insights by expert astrologers 🌠
      </Text>

      {/* Cards Grid */}
      <FlatList
        data={zodiacData}
        numColumns={numColumns}
        keyExtractor={(item) => item.name}
        columnWrapperStyle={tw`justify-between mt-3`}
        contentContainerStyle={tw`pb-10`}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9} style={tw`w-[48%] my-2`}>
            <LinearGradient
              colors={item.color}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tw`rounded-3xl p-5 items-center justify-center shadow-lg`}
            >
              {/* Zodiac Icon Placeholder */}
              <View style={tw`w-16 h-16 rounded-full bg-white/20 items-center justify-center mb-3`}>
                <Text style={tw`text-white text-2xl font-bold`}>
                  {item.name.charAt(0)}
                </Text>
              </View>

              {/* Zodiac Info */}
              <Text style={tw`text-white text-lg font-bold`}>{item.name}</Text>
              <Text style={tw`text-white text-xs mt-1`}>{item.date}</Text>
              <Text style={tw`italic text-white text-[11px] text-center mt-1`}>
                {item.tagline}
              </Text>

              {/* Button */}
              <TouchableOpacity
                style={tw`mt-3 bg-[#FFD700] rounded-full px-5 py-1.5 shadow-md`}
              >
                <Text style={tw`text-[#4B2800] font-semibold text-xs`}>
                  Read Horoscope
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
