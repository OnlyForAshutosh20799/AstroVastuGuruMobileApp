import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import tw from "twrnc";
import { useTheme } from "../../../Context/ThemContext";

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
        { backgroundColor: theme.background },
      ]}
    >
      {/* Header */}
      <View style={tw`flex-row items-center justify-between mb-4 mx-5`}>
        <Text
          style={[
            tw`text-lg font-bold`,
            { color: theme.text },
          ]}
        >
          Consult with Experts
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={[
              tw`text-sm font-semibold`,
              { color: isDark ? "#FFD700" : "#E67E22" },
            ]}
          >
            See All →
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
        renderItem={({ item }) => (
          <TouchableOpacity
           
            style={[
              tw`rounded-2xl overflow-hidden mx-2`,
              {
                width: cardWidth,
                backgroundColor: theme.card,
                borderWidth: 1,
                borderColor: theme.border,
              },
            ]}
          >
            {/* 🌈 Gradient Header */}
            <LinearGradient
              colors={item.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tw`h-22 items-center justify-center`}
            >
              <Image
                source={{ uri: item.image }}
                style={tw`w-15 h-15 rounded-full border-4 border-white`}
                resizeMode="cover"
              />
            </LinearGradient>

            {/* 🌟 Content */}
            <View
              style={[
                tw`py-2`,
                {
                  backgroundColor: isDark ? "#0F172A" : "#FFFFFF",
                },
              ]}
            >
              <Text
                style={[
                  tw`text-lg font-bold text-center`,
                  { color: theme.text },
                ]}
              >
                {item.name}
              </Text>

              <Text
                style={[
                  tw`text-sm text-center mt-1`,
                  { color: theme.subText },
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
