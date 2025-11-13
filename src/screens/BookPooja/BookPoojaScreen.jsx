import React, { useState } from 'react';
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
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

/* --------------------------------------------------------------
   CATEGORIES & DUMMY DATA
   -------------------------------------------------------------- */
const categories = [
  'Navgraha',
  'Pooja for love',
  'Pooja For Vashikaran',
  'Pooja For Career',
  'Pooja For Finance',
  'Pooja For Education',
  'Pooja For Travel',
  'Pooja For Child Birth',
  'Pooja For Planetary',
  'Pooja For Marriage',
  'Pooja For Health',
  'Nakshtra Pooja',
  'Dosh',
  'Pooja For Overcome Enemies',
  'Path and Jaap',
  'Evil Eye',
];

const dummyBooks = {
  'Navgraha': [
    {
      id: '1',
      title: 'Navgraha Shanti Puja',
      desc: 'Navgraha Shanti Puja is a powerful ritual to appease the nine planets & bring peace & harmony in life. AstroVastuGuru online pooja service makes it convenient for anyone to perform this puja from the comfort of their home, ensuring blessings & positive energy.',
      image:
        'https://duastro.com/admin/productimage/navgraha.jpg',
    },
    {
      id: '2',
      title: 'Surya Shanti Puja',
      desc: 'Surya Shanti Pooja Radiate Positivity. Illuminate Life. Embrace Harmony. Experience Joy and Prosperity. Your Path to Inner Peace Begins Now !.',
      image:
        'https://duastro.com/admin/productimage/LORD%20SURYA%20MANTRA.jpg',
    },
    {
      id: '3',
      title: 'Mangal Shanti Puja',
      desc: 'Mangal Shanti Puja is a powerful ritual to appease the planet Mars & bring peace & harmony in life. AstroVastuGuru online service makes it convenient to perform this puja from anywhere, ensuring positive energy & protection from malefic effects of Mars.',
      image:
        'https://duastro.com/admin/productimage/LORD%20MARS%20(MANGAL)%20MANTRA.jpg',
    },
    {
      id: '4',
      title: 'Chandra Shanti Puja',
      desc: 'Chandra Shanti Puja from AstroVastuGuru helps to calm the mind & emotions by appeasing the Moon. This online service provides a convenient way to perform the ritual & seek blessings for peace & harmony in life.',
      image:
        'https://duastro.com/admin/productimage/LORD%20SURYA%20MANTRA.jpg',
    },
    {
      id: '5',
      title: 'Shani Shanti Puja',
      desc: 'Shani Shanti Puja is a powerful ritual to appease the planet Saturn & bring peace & harmony in life. AstroVastuGuru online pooja service makes it convenient for anyone to perform this puja & receive blessings for a smoother life journey.',
      image:
        'https://duastro.com/admin/productimage/LORD%20SHANI%20(SATURN)%20MANTRA.jpg',
    },
  ],
  'Finance Horoscope': [
    {
      id: '3',
      title: 'Wealth Forecast 2025',
      desc: 'Understand financial ups and downs based on planetary positions.',
      image:
        'https://plus.unsplash.com/premium_photo-1701001342656-7cc1d68477ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yb3Njb3BlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700y',
    },
  ],
  'Family Horoscope': [
    {
      id: '4',
      title: 'Harmony in Family Life',
      desc: 'Explore planetary influences on family and relationships.',
      image: 'https://source.unsplash.com/800x600/?family,happiness',
    },
  ],
  'Health Horoscope': [
    {
      id: '5',
      title: 'Wellness Predictions',
      desc: 'Stay informed about your health cycles through astrology.',
      image: 'https://source.unsplash.com/800x600/?health,wellness',
    },
  ],
  'Education Horoscope': [
    {
      id: '6',
      title: 'Academic Success Report',
      desc: 'Plan your studies with planetary alignment for better results.',
      image: 'https://source.unsplash.com/800x600/?education,books',
    },
  ],
};

/* --------------------------------------------------------------
   MAIN COMPONENT
   -------------------------------------------------------------- */
const BookPoojaScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  const insets = useSafeAreaInsets();
  const isTablet = width >= 768;

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const books = dummyBooks[selectedCategory] || [];

  // ---- Render WhatsApp-style row ----
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
      onPress={() => navigation.navigate("Book Puja", { item })}
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
          numberOfLines={1}
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
        onPress={() => navigation.navigate("Book Puja", { item })}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
            fontSize: isTablet ? 14 : 12,
          }}
        >
          Book Now
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
        Book Devine Puja
        </Text>
        <Text
          style={{
            fontSize: isTablet ? 16 : 13,
            color: isDark ? theme.subText : '#666',
            marginTop: 4,
          }}
        >
          Choose a category to explore related Puja
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

      {/* ================= BOOK LIST ================= */}
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

export default BookPoojaScreen;
