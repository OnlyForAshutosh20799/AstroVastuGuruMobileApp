// src/screens/ComboOffersScreen.jsx
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import tw from "twrnc";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../../../Context/ThemContext";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.85;
const CARD_MARGIN = 12;

// 🌟 Combo Data
const comboData = [
  {
    title: "Career Success",
    subtitle: "Professional Triumph Roadmap",
    description:
      "6 comprehensive PDF reports covering Career, Finance, Business, and Life Forecast.",
    images: [
      require("../../../assets/comboOfferImages/CareerSuccessCombo/1.webp"),
      require("../../../assets/comboOfferImages/CareerSuccessCombo/2.webp"),
      require("../../../assets/comboOfferImages/CareerSuccessCombo/3.webp"),
      require("../../../assets/comboOfferImages/CareerSuccessCombo/4.webp"),
    ],
    buttonText: "Get Career Combo",
    gradient: ["#F59E0B", "#F97316"],
    icon: "💼",
  },
  {
    title: "Love & Marriage",
    subtitle: "Find Your Perfect Partner",
    description:
      "Detailed reports on Relationship, Married Life, and Compatibility analysis.",
    images: [
      require("../../../assets/comboOfferImages/LoveMarriageCombo/1.webp"),
      require("../../../assets/comboOfferImages/LoveMarriageCombo/2.webp"),
      require("../../../assets/comboOfferImages/LoveMarriageCombo/3.webp"),
      require("../../../assets/comboOfferImages/LoveMarriageCombo/4.webp"),
    ],
    buttonText: "Get Love Combo",
    gradient: ["#EC4899", "#F97316"],
    icon: "💖",
  },
  {
    title: "Health & Well Being",
    subtitle: "Nurture Body and Soul",
    description:
      "In-depth PDF reports on Health, Family, and Life Forecast guidance.",
    images: [
      require("../../../assets/comboOfferImages/HealthWelthBeingCombo/1.webp"),
      require("../../../assets/comboOfferImages/HealthWelthBeingCombo/2.webp"),
    ],
    buttonText: "Get Health Combo",
    gradient: ["#16A34A", "#65A30D"],
    icon: "🌿",
  },
  {
    title: "Business Mastery",
    subtitle: "Propel Your Ventures",
    description:
      "Reports on Business, Finance, Property, and Growth strategies.",
    images: [
      require("../../../assets/comboOfferImages/BusinessMasteryCombo/1.webp"),
      require("../../../assets/comboOfferImages/BusinessMasteryCombo/2.webp"),
    ],
    buttonText: "Get Business Combo",
    gradient: ["#2563EB", "#1E3A8A"],
    icon: "📈",
  },
  {
    title: "Numerology",
    subtitle: "Decode Your Destiny",
    description:
      "Understand how numbers shape your path with Numerology and Life Forecast.",
    images: [
      require("../../../assets/comboOfferImages/Numerology Combo/1.webp"),
      require("../../../assets/comboOfferImages/Numerology Combo/2.webp"),
    ],
    buttonText: "Get Numerology Combo",
    gradient: ["#9333EA", "#F59E0B"],
    icon: "🔢",
  },
];

// 💫 Main Screen
const ComboOffersScreen = () => {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  return (
    <ScrollView
      style={[tw`flex-1`, { backgroundColor: theme.background }]}
      contentContainerStyle={tw`pb-6`}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section with See All */}
      <View
        style={tw`px-6 pb-4 flex-row items-center justify-between mt-3`}
      >
        <View style={tw`flex-1`}>
          <Text
            style={[
              tw`text-xl font-bold mb-1`,
              { color: theme.text, textAlign: "left" },
            ]}
          >
            Combo Offers
          </Text>
          <Text
            style={[
              tw`text-base leading-5`,
              { color: theme.subText, textAlign: "left" },
            ]}
          >
            Exclusive bundled packages for comprehensive insights
          </Text>
        </View>

        {/* 🌈 See All Button */}
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

      {/* Horizontal Scroll Cards */}
      <View style={tw`py-4`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`px-4`}
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
          snapToAlignment="center"
        >
          {comboData.map((combo, index) => (
            <View
              key={index}
              style={[
                tw`rounded-3xl mx-2 overflow-hidden`,
                {
                  width: CARD_WIDTH,
                  backgroundColor: theme.card,
                  borderWidth: 1,
                  borderColor: theme.border,
                },
              ]}
            >
              {/* Card Header */}
              <LinearGradient
                colors={combo.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={tw`px-5 py-2 flex-row items-center`}
              >
                <Text style={tw`text-2xl mr-3`}>{combo.icon}</Text>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-white font-bold text-lg`}>
                    {combo.title}
                  </Text>
                  <Text style={tw`text-white text-xs opacity-90`}>
                    {combo.subtitle}
                  </Text>
                </View>
              </LinearGradient>

              {/* Images */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={tw`px-4 py-4`}
              >
                {combo.images.map((img, i) => (
                  <View key={i} style={tw`mr-3`}>
                    <Image
                      source={img}
                      style={{
                        width: 70,
                        height: 100,
                        borderRadius: 12,
                        resizeMode: "cover",
                      }}
                    />
                  </View>
                ))}
              </ScrollView>

              {/* Description + Button */}
              <View style={tw`px-5 pb-5`}>
                <Text
                  style={[
                    tw`text-sm leading-5 mb-4`,
                    { color: theme.text, lineHeight: 20 },
                  ]}
                >
                  {combo.description}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={tw`rounded-2xl overflow-hidden`}
                >
                  <LinearGradient
                    colors={combo.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={tw`py-3 items-center`}
                  >
                    <Text style={tw`text-white font-bold text-sm`}>
                      {combo.buttonText}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Why Combo Section */}
      <View style={tw`px-6 mt-4`}>
        <View
          style={[
            tw`rounded-2xl px-5 py-4`,
            {
              backgroundColor: theme.card,
              borderWidth: 1,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[tw`font-bold text-center mb-2`, { color: theme.text }]}
          >
            Why Choose Combo Offers?
          </Text>
          <View style={tw`flex-row justify-between`}>
            {[
              { icon: "💰", text: "Save 40%" },
              { icon: "📚", text: "Multiple Reports" },
              { icon: "🎯", text: "Complete Guidance" },
              { icon: "⏱️", text: "Limited Time" },
            ].map((item, i) => (
              <View key={i} style={tw`items-center flex-1`}>
                <Text style={tw`text-2xl mb-1`}>{item.icon}</Text>
                <Text
                  style={[tw`text-xs text-center`, { color: theme.subText }]}
                >
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Support CTA */}
      <View style={tw`px-6 mt-4`}>
        <LinearGradient colors={theme.gradient} style={tw`rounded-2xl`}>
          <TouchableOpacity
            style={[
              tw`rounded-2xl py-3 items-center`,
              {
                backgroundColor: theme.card,
                borderWidth: 1,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={[tw`font-medium text-sm`, { color: theme.text }]}>
              💬 Need Help Choosing? Chat with Experts
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default ComboOffersScreen;
