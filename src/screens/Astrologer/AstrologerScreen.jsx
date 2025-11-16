// AstrologerScreen.jsx
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../Context/ThemContext';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const AstrologerScreen = () => {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('profile');
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef();

  // 🔥 Banner Images
  const banners = [
    {
      img: require('../../assets/astrologyBanner/Astrologer Profile Banner.png'),
    },
    {
      img: require('../../assets/astrologyBanner/Chat with Astrologer Banner.png'),
    },
    {
      img: require('../../assets/astrologyBanner/Call with Astrologer Banner.png'),
    },
  ];

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = (prev + 1) % banners.length;
        scrollRef.current?.scrollTo({ x: next * width, animated: true });
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const buttons = [
    { key: 'profile', label: 'Astrologer Profile', icon: '👤' },
    { key: 'chat', label: 'Chat with Astrologer', icon: '💬' },
    { key: 'call', label: 'Call with Astrologer', icon: '📞' },
    { key: 'register', label: 'Astrologer Registration', icon: '📝' },
  ];

  const buttonWidth = isTablet ? '30%' : '47%';

  const handlePress = (key) => {
  if (key === "profile") navigation.navigate("Astrologer Profile");
  if (key === "chat") navigation.navigate("Chat with Astrologer");
  if (key === "call") navigation.navigate("Call with Astrologer");
  if (key === "register") navigation.navigate("AstrologerRegistration");
};

  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔥 BANNER SLIDER */}
        <View style={tw`mt-1`}>
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
                <View style={tw`px-3`}>
                  <Image
                    source={b.img}
                    style={{
                      width: '100%',
                      height: height * 0.16,
                      borderRadius: 16,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            ))}
          </ScrollView>

        </View>

        {/* HEADER */}
        <View style={tw`px-4 mt-2 mb-3`}>
          <Text style={[tw`text-xl font-bold`, { color: theme.text }]}>
            Astrology Services
          </Text>
          <Text style={[tw`text-sm mt-1`, { color: isDark ? '#AAA' : '#666' }]}>
            Choose your preferred consultation method
          </Text>
        </View>

        {/* GRID BUTTONS */}
        <View
          style={[
            tw`rounded-3xl flex-row flex-wrap justify-between px-4 py-5 gap-3 mx-4`,
            {
              backgroundColor: isDark ? '#1A1A1A' : '#F2F3F4',
              borderRadius: 24,
              shadowColor: '#000',
              shadowOpacity: 0.12,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: 8,
            },
          ]}
        >
          {buttons.map(btn => (
            <TouchableOpacity
             onPress={() => handlePress(btn.key)}
              key={btn.key}
              activeOpacity={0.85}
              style={[
                tw`rounded-2xl overflow-hidden`,
                {
                  width: buttonWidth,
                  // Add subtle card shadow for buttons
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOpacity: 0.08,
                  shadowRadius: 6,
                  shadowOffset: { width: 0, height: 3 },
                },
              ]}
            >
              <LinearGradient
                colors={
                  isDark
                    ? ['#2C2C2C', '#1E1E1E'] // smooth dark gradient
                    : ['#FFFFFF', '#F9FAFB'] // glossy soft white
                }
                style={tw`py-3 px-2 rounded-2xl items-center justify-center min-h-[82px]`}
              >
                <Text style={tw`text-xl mb-1`}>{btn.icon}</Text>

                <Text
                  style={[
                    tw`text-center font-semibold text-xs leading-tight`,
                    { color: isDark ? '#E5E5E5' : '#2A2A2A' },
                  ]}
                  numberOfLines={2}
                >
                  {btn.label}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Benefits Section */}
        <View style={tw`px-4 mt-6`}>
          <Text style={[tw`text-lg font-bold`, { color: theme.text }]}>
            Why Consult an Astrologer?
          </Text>
          <Text
            style={[tw`mt-2 leading-6`, { color: isDark ? '#CCC' : '#444' }]}
          >
            Astrology helps you understand life challenges, discover
            opportunities, and make better decisions related to:
          </Text>

          <View style={tw`mt-3`}>
            {[
              '✔ Marriage & Relationships',
              '✔ Career & Job Growth',
              '✔ Business & Finances',
              '✔ Health & Wellness',
              '✔ Vastu & Gemstone Guidance',
              '✔ Love & Compatibility',
            ].map((item, index) => (
              <Text
                key={index}
                style={[
                  tw`mt-1 text-base`,
                  { color: isDark ? '#DDD' : '#555' },
                ]}
              >
                {item}
              </Text>
            ))}
          </View>
        </View>

        {/* How it Works */}
        <View style={tw`px-4 mt-6`}>
          <Text style={[tw`text-lg font-bold`, { color: theme.text }]}>
            How It Works
          </Text>

          <View style={tw`mt-3`}>
            {[
              '1️⃣ Choose your astrologer',
              '2️⃣ Select Chat or Call',
              '3️⃣ Recharge wallet (secure payments)',
              '4️⃣ Get personalised consultation instantly',
            ].map((step, i) => (
              <Text
                key={i}
                style={[
                  tw`mt-2 text-base leading-6`,
                  { color: isDark ? '#CCC' : '#444' },
                ]}
              >
                {step}
              </Text>
            ))}
          </View>
        </View>

        {/* Reasons to Chat/Call */}
        <View style={tw`px-4 mt-6 mb-6`}>
          <Text style={[tw`text-lg font-bold`, { color: theme.text }]}>
            Why Chat or Call with Our Astrologers?
          </Text>

          <View style={tw`mt-3`}>
            {[
              '📱 24/7 Availability',
              '🛡 100% Private & Secure',
              '⚡ Instant Responses',
              '🌐 Multilingual Astrologers',
              '⭐ Verified & Experienced Experts',
              '📜 Personalized Remedies',
            ].map((point, i) => (
              <Text
                key={i}
                style={[
                  tw`mt-2 text-base`,
                  { color: isDark ? '#CCC' : '#444' },
                ]}
              >
                {point}
              </Text>
            ))}
          </View>
        </View>

        {/* STAT CARDS */}
        <View style={tw`flex-row justify-between px-3 mb-10`}>
          <View
            style={[
              tw`p-3 rounded-lg flex-1 mx-1`,
              { backgroundColor: isDark ? '#1E3A8A' : '#3B82F6' },
            ]}
          >
            <Text style={tw`text-white text-center font-bold text-lg`}>
              50+
            </Text>
            <Text style={tw`text-white text-center text-xs mt-1`}>
              Expert Astrologers
            </Text>
          </View>

          <View
            style={[
              tw`p-3 rounded-lg flex-1 mx-1`,
              { backgroundColor: isDark ? '#059669' : '#10B981' },
            ]}
          >
            <Text style={tw`text-white text-center font-bold text-lg`}>
              10K+
            </Text>
            <Text style={tw`text-white text-center text-xs mt-1`}>
              Happy Clients
            </Text>
          </View>

          <View
            style={[
              tw`p-3 rounded-lg flex-1 mx-1`,
              { backgroundColor: isDark ? '#DC2626' : '#EF4444' },
            ]}
          >
            <Text style={tw`text-white text-center font-bold text-lg`}>
              24/7
            </Text>
            <Text style={tw`text-white text-center text-xs mt-1`}>
              Available
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AstrologerScreen;
