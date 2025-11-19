import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../Context/ThemContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';
import HoroscopeBookingModal from './HoroscopeBookingModal';

const { width } = Dimensions.get('window');

export default function KundliMainSubScreen() {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  const route = useRoute();
  const navigation = useNavigation();

  const { item } = route.params || {};
  console.log("Hello", item)
  const [cardData, setCardData] = useState(item);
   const [modalVisible, setModalVisible] = useState(false);

  const cardBg = isDark ? '#1E1E1E' : '#FFFFFF';
  const borderCol = isDark ? '#333' : '#E5E5E5';
  const headerBg = isDark ? '#121212' : '#FAFAFA';

  // 📱 Custom Header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: headerBg,
      },
      headerTitle: item?.title || 'Horoscope',
      headerTitleStyle: {
        fontSize: 21,
        fontWeight: '700',
        color: theme.text,
      },
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw` rounded-full pr-2`}
        >
          <Ionicons name="arrow-back" size={22} color={theme.text} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, theme]);

  const features = [
    { icon: '📅', title: 'Month by Month', desc: 'Know when to focus more.' },
    {
      icon: '⚡',
      title: 'Quick Delivery',
      desc: 'Report delivered in 24 hours.',
    },
    { icon: '📄', title: 'Easy PDF', desc: 'Simple to read & access anytime.' },
    { icon: '🎯', title: 'Expert Tips', desc: 'Guided by Mr. Astro Verma.' },
    {
      icon: '📚',
      title: 'Study Success',
      desc: 'Tips to improve exam results.',
    },
    {
      icon: '✅',
      title: 'Practical Advice',
      desc: 'Daily study habit guidance.',
    },
  ];

  return (
    <ScrollView
      style={[tw`flex-1`, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* 🧭 Header Content */}
      <View
        style={[
          tw`mx-5 px-2 rounded-2xl py-2 border shadow-xl`,
           {
            backgroundColor: cardBg,
            borderWidth: 1,
            borderColor: borderCol,
          },
          { backgroundColor: headerBg },
        ]}
      >
        <Text
          style={[
            tw`text-center mt-2`,
            { color: theme.subText, fontSize: 14, lineHeight: 20 },
          ]}
        >
          {item.desc}
        </Text>

        {/* Buttons */}
        <View style={tw`flex-row items-center justify-center gap-3 mt-5`}>
          {['Hindi Sample', 'English Sample'].map((lang, i) => (
            <TouchableOpacity
              key={i}
              style={[
                tw`flex-row items-center rounded-full px-4 py-2`,
                {
                  backgroundColor: isDark ? '#2A2A2A' : '#F2F2F2',
                  borderWidth: 1,
                  borderColor: borderCol,
                },
              ]}
            >
              <Ionicons
                name="download-outline"
                size={18}
                color={isDark ? '#FFD700' : '#E91E63'}
                style={tw`mr-2`}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: theme.text,
                }}
              >
                {lang}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* CTA Button */}
        <View style={tw`items-center my-6`}>
          <TouchableOpacity
           onPress={() => setModalVisible(true)}
            activeOpacity={0.85}
            style={[
              tw`flex-row items-center justify-center px-5 py-1 rounded-full shadow-sm`,
              { backgroundColor: isDark ? '#E91E63' : '#FF7043' },
            ]}
          >
            <Text
              style={[
                tw`text-white line-through opacity-80 mr-2`,
                { fontSize: 14 },
              ]}
            >
              ₹1299
            </Text>
            <Text style={[tw`text-white font-bold mr-2`, { fontSize: 18 }]}>
              ₹299
            </Text>
            <Text style={[tw`text-white font-semibold`, { fontSize: 16 }]}>
              Order Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ✨ Features List */}
      <View style={tw`px-5 mt-5 pb-4`}>
        {features.map((item, index) => (
          <View
            key={index}
            style={[
              tw`flex-row items-center p-4 rounded-xl mb-3`,
              {
                backgroundColor: cardBg,
                borderWidth: 1,
                borderColor: borderCol,
                shadowColor: isDark ? '#000' : '#ddd',
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 2,
              },
            ]}
          >
            <Text style={{ fontSize: 24, marginRight: 14 }}>{item.icon}</Text>
            <View style={tw`flex-1`}>
              <Text
                style={[tw`font-bold`, { color: theme.text, fontSize: 16 }]}
              >
                {item.title}
              </Text>
              <Text style={[tw`mt-1`, { color: theme.subText, fontSize: 13 }]}>
                {item.desc}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* 📘 Why Choose Section */}
      <View
        style={[
          tw`mx-5 p-5 rounded-2xl mb-6`,
          {
            backgroundColor: cardBg,
            borderWidth: 1,
            borderColor: borderCol,
          },
        ]}
      >
        <Text
          style={[
            tw`text-center font-extrabold`,
            { fontSize: 18, color: theme.text },
          ]}
        >
          Why Choose Our {cardData.title}?
        </Text>

        <Text
          style={[
            tw`text-center mt-3`,
            { color: theme.subText, fontSize: 14, lineHeight: 20 },
          ]}
        >
          {cardData.desc}
        </Text>
      </View>
         {/* Booking Modal */}
      <HoroscopeBookingModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        item={item}
      />
    </ScrollView>
  );
}
