import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  useColorScheme,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import tw from "twrnc";
import { useTheme } from '../../../Context/ThemContext';

const { width } = Dimensions.get("window");
const cardWidth = width * 0.4;

const astrologers = [
  {
    id: 1,
    name: "Priya Sharma",
    language: "Hindi, English",
    experience: "8 Years",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    gradient: ["#FFD700", "#FF8C00"],
  },
  {
    id: 2,
    name: "Rahul Verma",
    language: "English, Tamil",
    experience: "6 Years",
    image: "https://cdn-icons-png.flaticon.com/512/4322/4322991.png",
    gradient: ["#36D1DC", "#5B86E5"],
  },
  {
    id: 3,
    name: "Sneha Patil",
    language: "Marathi, Hindi",
    experience: "5 Years",
    image: "https://cdn-icons-png.flaticon.com/512/4322/4322994.png",
    gradient: ["#FF5F6D", "#FFC371"],
  },
  {
    id: 4,
    name: "Amit Rao",
    language: "English, Gujarati",
    experience: "10 Years",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    gradient: ["#11998E", "#38EF7D"],
  },
];

export default function ConsultWithExpertSection() {
    const { theme } = useTheme();
    
      const isDark = theme.mode === "dark";


  return (
    <View
      style={[
        tw`py-8`,
        { backgroundColor: theme.background }
      ]}
    >
      {/* Header */}
      <View style={tw`flex-row items-center justify-between mb-4 mx-5`}>
        <Text
          style={[
            tw`text-lg font-bold`,
            { color: isDark ? "#FFFFFF" : "#1E293B" },
          ]}
        >
          Consult with Experts
        </Text>

        <TouchableOpacity>
          <Text
            style={[
              tw`text-sm font-semibold`,
              { color: isDark ? "#FFD700" : "#E67E22" },
            ]}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Astrologer Cards */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={astrologers}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={cardWidth + 16}
        decelerationRate="fast"
         contentContainerStyle={tw`px-2`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              tw`rounded-2xl overflow-hidden mx-2 mb-5 shadow-lg`,
              {
                width: cardWidth,
                backgroundColor: isDark ? "#1E293B" : "#FFFFFF",
              },
            ]}
          >
            {/* Gradient Header */}
            <View

              style={tw`h-25 items-center justify-center bg-black`}
            >
              <Image
                source={{ uri: item.image }}
                style={tw`w-20 h-20 rounded-full border-4 border-white`}
                resizeMode="cover"
              />
            </View>

            {/* Content */}
            <View style={tw`p-4 bg-black`}>
              <Text
                style={[
                  tw`text-lg font-bold text-center`,
                  { color: isDark ? "#fff" : "#fff" },
                ]}
              >
                {item.name}
              </Text>

              <Text
                style={[
                  tw`text-sm text-center mt-1`,
                  { color: isDark ? "#fff" : "#fff" },
                ]}
              >
                {item.language}
              </Text>

              <Text
                style={[
                  tw`text-sm text-center mt-1`,
                  { color: isDark ? "#EAB308" : "#B45309" },
                ]}
              >
                Experience: {item.experience}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
