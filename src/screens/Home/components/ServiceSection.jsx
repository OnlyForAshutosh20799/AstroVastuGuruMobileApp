import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import { useTheme } from "../../../Context/ThemContext";

const { width, height } = Dimensions.get("window");

const banners = [
  { id: 1, img: require("../../../assets/banner/Numerology Banner.png") },
  { id: 2, img: require("../../../assets/banner/Planet Transit Banner.png") },
  { id: 3, img: require("../../../assets/banner/Zodiac Sign Banner.png") },
];

const services = [
  { name: "Match Making", icon: "heart-outline" },
  { name: "Panchang", icon: "calendar-outline" },
  { name: "Tarot Reading", icon: "book-outline" },
  { name: "Kundli", icon: "planet-outline" },
  { name: "Family Horoscope", icon: "people-outline" },
  { name: "Numerology", icon: "key-outline" },
  { name: "Remedies", icon: "medkit-outline" },
  { name: "Planet Transits", icon: "globe-outline" },
  { name: "Vastu", icon: "home-outline" },
  { name: "Zodiac Signs", icon: "sparkles-outline" },
  { name: "Festivals", icon: "gift-outline" },
  { name: "Spirituality", icon: "leaf-outline" },
];

export default function ServiceSection() {
  const { theme } = useTheme();
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const iconSize = width > 600 ? 40 : 26;
  const cardSize = width > 600 ? 90 : 64;
  const columns = width > 600 ? "22%" : "30%";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % banners.length;
        scrollRef.current?.scrollTo({ x: next * width, animated: true });
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[tw`pt-3`, { backgroundColor: theme.background }]}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={width}
      >
        {banners.map((b, i) => (
          <View key={i} style={{ width }}>
            <View style={tw`px-2`}>
              <Image
                source={b.img}
                style={{
                  width: "100%",
                  height: height * 0.12,
                  borderRadius: 20,
                }}
                resizeMode="cover"
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={tw`mt-5 px-4`}>
        <Text
          style={[
            tw`text-lg font-bold text-center mb-3`,
            { color: theme.text },
          ]}
        >
          Schedule your Consultation
        </Text>

        <View style={tw`flex-row flex-wrap justify-between mt-3`}>
          {services.map((s, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              style={[{ width: columns }, tw`mb-10 items-center`]}
            >
              <LinearGradient
                colors={["#FFD700", "#FFB347", "#FF9933"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  tw`rounded-2xl items-center justify-center shadow-md`,
                  { width: cardSize, height: cardSize },
                ]}
              >
                <Ionicons name={s.icon} size={iconSize} color="#000" />
              </LinearGradient>
              <Text
                style={[
                  tw`text-center mt-1 font-semibold`,
                  { color: theme.subText, fontSize: width > 600 ? 14 : 12 },
                ]}
              >
                {s.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
