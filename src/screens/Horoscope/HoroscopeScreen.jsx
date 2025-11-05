import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "twrnc";
import { useTheme } from "../../Context/ThemContext";

const { width } = Dimensions.get("window");
const cardWidth = (width - 60) / 3;

// 🪐 Local banner images
const banners = [
  require("../../assets/HoroscopeBanner/Daily Horoscope Banner Fixed.png"),
  require("../../assets/HoroscopeBanner/Love Horoscope Banner.png"),
  require("../../assets/HoroscopeBanner/Monthly Horoscope Banner.png"),
  require("../../assets/HoroscopeBanner/Today Prediction Banner.png"),
];

// ♈ Zodiac data with Flaticon icons
const zodiacs = [
  { name: "Aries", icon: "https://cdn-icons-png.flaticon.com/128/47/47043.png" },
  { name: "Taurus", icon: "https://cdn-icons-png.flaticon.com/128/47/47219.png" },
  { name: "Gemini", icon: "https://cdn-icons-png.flaticon.com/128/17926/17926014.png" },
  { name: "Cancer", icon: "https://cdn-icons-png.flaticon.com/128/47/47321.png" },
  { name: "Leo", icon: "https://cdn-icons-png.flaticon.com/128/47/47157.png" },
  { name: "Virgo", icon: "https://cdn-icons-png.flaticon.com/128/47/47038.png" },
  { name: "Libra", icon: "https://cdn-icons-png.flaticon.com/128/47/47047.png" },
  { name: "Scorpio", icon: "https://cdn-icons-png.flaticon.com/128/47/47183.png" },
  { name: "Sagittarius", icon: "https://cdn-icons-png.flaticon.com/128/47/47213.png" },
  { name: "Capricorn", icon: "https://cdn-icons-png.flaticon.com/128/7828/7828321.png" },
  { name: "Aquarius", icon: "https://cdn-icons-png.flaticon.com/128/5796/5796758.png" },
  { name: "Pisces", icon: "https://cdn-icons-png.flaticon.com/128/47/47405.png" },
];

export default function HoroscopeScreen() {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  // Banner auto-scroll logic
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % banners.length;
      setIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <ScrollView
      style={[tw`flex-1`, { backgroundColor: theme.background }]}
      contentContainerStyle={tw`pb-6 pt-12`}
    >
      {/* 🔮 Auto-scroll banner */}
      <FlatList
        ref={flatListRef}
        data={banners}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: width - 25,
              height: 120,
              borderRadius: 16,
              marginHorizontal: 15,
              marginTop: 10,
            }}
            resizeMode="cover"
          />
        )}
      />

      {/* 🟡 Page Indicator */}
      <View style={[tw`flex-row justify-center mt-2`]}>
        {banners.map((_, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 4,
              backgroundColor:
                i === index
                  ? isDark
                    ? "#FACC15"
                    : "#EA580C"
                  : isDark
                  ? "#475569"
                  : "#E5E7EB",
            }}
          />
        ))}
      </View>

      {/* Header */}
      <Text
        style={[
          tw`text-lg font-bold mt-4 mb-3 px-5`,
          { color: theme.primary },
        ]}
      >
        Daily Horoscope
      </Text>

      {/* Zodiac Grid */}
      <View style={[tw`flex-row flex-wrap justify-between px-5`]}>
        {zodiacs.map((z, i) => (
          <TouchableOpacity
            key={i}
            style={[
              tw`rounded-2xl mb-4 p-4 items-center`,
              {
                width: cardWidth,
                backgroundColor: isDark ? "#000" : "#FFF8E1",
                borderWidth: 1,
                borderColor: isDark ? "#2A2A2A" : "#FFD54F",
                elevation: 3,
              },
            ]}
          >
            <Image
              source={{ uri: z.icon }}
              style={{
                width: 50,
                height: 50,
                marginBottom: 8,
                tintColor: isDark ? "#FACC15" : "#EA580C",
              }}
              resizeMode="contain"
            />
            <Text
              style={[
                tw`text-center text-base font-bold mb-1`,
                { color: theme.primary },
              ]}
            >
              {z.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
