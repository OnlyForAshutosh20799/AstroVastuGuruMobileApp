import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Dimensions,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../Context/ThemContext';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

/* --------------------------------------------------------------
   CATEGORIES & DUMMY DATA
   -------------------------------------------------------------- */
const categories = [
  'Career Report',
  'Finance Horoscope',
  'Family Horoscope',
  'Health Horoscope',
  'Education Horoscope',
  'Gemstone Prediction',
  'Yearly Horoscope',
  'Numerology Horoscope',
  'Kundli Dosh Calculation',
  'Lal Kitab Prediction',
  'Marriage Matching',
  'Planet Transit Prediction',
  'In Depth Horoscope',
  '120 Year Dasha Analysis',
  '300 Yoga Calculation',
  'Muhurat',
];

const dummyBooks = {
  'Career Report': [
    {
      id: '1',
      title: '12 Month Career Horoscope',
      desc: 'AstroVastuGuru offers fast accurate 2025 career predictions and horoscopes created by professional astrologers. Get your personalized report within 24 hours and uncover what 2025 holds for your job, growth and success based on your zodiac sign and birth chart. Trusted astrology service with quick delivery.',
      image: 'https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yb3Njb3BlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700',
    },
    {
      id: '2',
      title: '24 Month Career Horoscope',
      desc: 'Get a 24 Month Career Prediction Report (2025-2026) with month by month insights to help you understand your career trajectory and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://images.unsplash.com/photo-1755540735962-905a0f9cdef9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9yb3Njb3BlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700',
    },
    {
      id: '3',
      title: '60 Month Career Horoscope',
      desc: 'Get a 60 Month Career Prediction Report (2025-2030) with month by month insights to help you understand your career trajectory and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://images.unsplash.com/photo-1755540735962-905a0f9cdef9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9yb3Njb3BlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700',
    }
  ],
  'Finance Horoscope': [
    {
      id: '4',
      title: '12 Months Finance Horoscope',
      desc: 'Get a 60 Month Finance Prediction Report (2025-2030) with month by month insights to help you understand your finance trajectory and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://plus.unsplash.com/premium_photo-1701001342656-7cc1d68477ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yb3Njb3BlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700y',
    },
    {
      id: '5',
      title: '24 Months Finance Horoscope',
      desc: 'Get a 24 Month Finance Prediction Report (2025-2026) with month by month insights to help you understand your finance trajectory and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://plus.unsplash.com/premium_photo-1701001342656-7cc1d68477ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yb3Njb3BlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700y',
    },
    {
      id: '6',
      title: '60 Months Finance Horoscope',
      desc: 'Get a 12 Month Finance Prediction Report (2025) with month by month insights to help you understand your finance trajectory and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://plus.unsplash.com/premium_photo-1701001342656-7cc1d68477ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yb3Njb3BlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700y',
    },
  ],
  'Family Horoscope': [
    {
      id: '7',
      title: '12 Months Family Horoscope',
      desc: 'Get a 12 Month Family Prediction Report (2025) with month by month insights to help you understand your family relationship and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?family,happiness',
    },
    {
      id: '8',
      title: '24 Months Family Horoscope',
      desc: 'Get a 24 Month Family Prediction Report (2025-2026) with month by month insights to help you understand your family relationship and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?family,happiness',
    },
    {
      id: '9',
      title: '60 Months Family Horoscope',
      desc: 'Get a 60 Month Family Prediction Report (2025-2030) with month by month insights to help you understand your family relationship and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?family,happiness',
    },
  ],
  'Health Horoscope': [
    {
      id: '10',
      title: '12 Months Family Horoscope',
      desc: 'Get a 12 Month Health Prediction Report (2025) with month by month insights to help you understand your health information and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?health,wellness',
    },
    {
      id: '11',
      title: '24 Months Family Horoscope',
      desc: 'Get a 24 Month Health Prediction Report (2025-2026) with month by month insights to help you understand your health information and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?health,wellness',
    },
    {
      id: '12',
      title: '60 Months Family Horoscope',
      desc: 'Get a 60 Month Health Prediction Report (2025-2030) with month by month insights to help you understand your health information and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?health,wellness',
    },
  ],
  'Education Horoscope': [
    {
      id: '13',
      title: '12 Months Family Horoscope',
      desc: 'Get a 12 Month Education Prediction Report (2025) with month by month insights to help you understand your education Horoscope and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?education,books',
    },
    {
      id: '14',
      title: '24 Months Family Horoscope',
      desc: 'Get a 24 Month Education Prediction Report (2025-2026) with month by month insights to help you understand your education Horoscope and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?education,books',
    },
    {
      id: '15',
      title: '60 Months Family Horoscope',
      desc: 'Get a 60 Month Education Prediction Report (2025-2030) with month by month insights to help you understand your education Horoscope and make informed decisions. Receive your detailed PDF report within 24 working hours.',
      image: 'https://source.unsplash.com/800x600/?education,books',
    },
  ],
};

/* --------------------------------------------------------------
   MAIN COMPONENT
   -------------------------------------------------------------- */
const BookCategoryScreen = () => {
  const Navigation = useNavigation()
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  const insets = useSafeAreaInsets();
  const isTablet = width >= 768;

  const route = useRoute();
  const { serviceId } = route.params ?? {};
 

 const initialCategory =
  serviceId !== undefined && categories[serviceId]
    ? categories[serviceId]
    : categories[0];

const [selectedCategory, setSelectedCategory] = useState(initialCategory);

// 🔥 FIX
useEffect(() => {
  if (serviceId !== undefined && categories[serviceId]) {
    setSelectedCategory(categories[serviceId]);
  }
}, [serviceId]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const books = dummyBooks[selectedCategory] || [];

  // ---- Render Lists ----
  const renderBook = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        tw`flex-row items-center rounded-2xl mb-3 mx-3 p-3`,
        {
          backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
          borderWidth: 1,
          borderColor: isDark ? '#333' : '#E5E7EB',
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 2,
        },
      ]}
      onPress={() => Navigation.navigate('KundliMainSubScreen', { item })}
    >
      {/* Thumbnail */}
      <Image
        source={{ uri: item.image }}
        style={{
          width: isTablet ? 80 : 60,
          height: isTablet ? 80 : 60,
          borderRadius: 12,
          marginRight: 12,
        }}
      />

      {/* Text content */}
      <View style={tw`flex-1`}>
        <Text
          style={{
            fontSize: isTablet ? 18 : 15,
            fontWeight: '700',
            color: isDark ? theme.text : '#222',
            marginBottom: 2,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: isTablet ? 15 : 13,
            color: isDark ? theme.subText : '#555',
          }}
          numberOfLines={3}
        >
          {item.desc}
        </Text>
      </View>

      {/* Order Now Button */}
      <TouchableOpacity
        style={[tw`rounded-full px-3 py-1`, { backgroundColor: theme.primary }]}
        onPress={() => Navigation.navigate('KundliMainSubScreen', { item })}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
            fontSize: isTablet ? 14 : 12,
          }}
        >
          Order Now
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  /* --------------------------------------------------------------
     MAIN UI
     -------------------------------------------------------------- */
  return (
    <SafeAreaView
      style={[
        tw`flex-1`,
        { backgroundColor: isDark ? theme.background : '#F9FAFB' },
      ]}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={Platform.OS === 'android'}
      />

      {/* ================= HEADER ================= */}
      <View
        style={{
          backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
          paddingTop: insets.top + (isTablet ? 12 : 8),
          paddingHorizontal: 20,
          paddingBottom: isTablet ? 18 : 14,
          borderBottomWidth: 1,
          borderBottomColor: isDark ? '#333' : '#EEE',
        }}
      >
        <Text
          style={{
            fontSize: isTablet ? 26 : 22,
            fontWeight: '700',
            color: theme.primary,
          }}
        >
          Kundli
        </Text>
        <Text
          style={{
            fontSize: isTablet ? 16 : 13,
            color: isDark ? theme.subText : '#666',
            marginTop: 4,
          }}
        >
          Explore categorys 
        </Text>
      </View>

      {/* ================= DROPDOWN ================= */}
      <View style={tw`px-4 pt-2`}>
        <TouchableOpacity
          onPress={() => setDropdownVisible(true)}
          style={[
            tw`flex-row justify-between items-center rounded-xl`,
            {
              borderWidth: 1,
              borderColor: isDark ? '#444' : '#DDD',
              backgroundColor: isDark ? '#1C1C1C' : '#FFF',
              paddingVertical: isTablet ? 14 : 12,
              paddingHorizontal: 16,
            },
          ]}
        >
          <Text
            style={{
              fontSize: isTablet ? 18 : 14,
              color: isDark ? '#EEE' : '#444',
              fontWeight: '500',
            }}
          >
            {selectedCategory}
          </Text>
          <Ionicons
            name="chevron-down-outline"
            size={isTablet ? 26 : 22}
            color={isDark ? '#AAA' : '#555'}
          />
        </TouchableOpacity>
      </View>

      {/* ================= DROPDOWN MODAL ================= */}
      <Modal
        visible={dropdownVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={tw`flex-1 bg-black/40 justify-center px-6`}
          activeOpacity={1}
          onPressOut={() => setDropdownVisible(false)}
        >
          <View
            style={[
              tw`rounded-2xl p-3`,
              {
                backgroundColor: isDark ? '#1C1C1C' : '#FFF',
                maxHeight: height * 0.6,
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 8,
                elevation: 8,
              },
            ]}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {categories.map((cat, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    tw`flex-row items-center p-3`,
                    idx < categories.length - 1 && {
                      borderBottomWidth: 1,
                      borderBottomColor: isDark ? '#333' : '#EEE',
                    },
                  ]}
                  onPress={() => {
                    setSelectedCategory(cat);
                    setDropdownVisible(false);
                  }}
                >
                  <Ionicons
                    name={
                      selectedCategory === cat
                        ? 'radio-button-on-outline'
                        : 'radio-button-off-outline'
                    }
                    size={isTablet ? 22 : 18}
                    color={selectedCategory === cat ? theme.primary : '#999'}
                    style={tw`mr-2`}
                  />
                  <Text
                    style={{
                      fontSize: isTablet ? 18 : 14,
                      color:
                        selectedCategory === cat
                          ? theme.primary
                          : isDark
                          ? '#EEE'
                          : '#333',
                      fontWeight: selectedCategory === cat ? '600' : '400',
                    }}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ================= BOOK LIST (WhatsApp style) ================= */}
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={renderBook}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: insets.bottom + 20,
        }}
        ListEmptyComponent={() => (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 30,
              fontSize: isTablet ? 18 : 14,
              color: isDark ? '#AAA' : '#666',
            }}
          >
            No books available for this category yet.
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default BookCategoryScreen;
