import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import tw from 'twrnc';
import { useTheme } from '../../Context/ThemContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

/* -----------------------------------------
   ✅ SINGLE CATEGORY ARRAY WITH ICONS
-------------------------------------------*/
const categories = [
  { name: 'Career Report', icon: 'briefcase-outline' },
  { name: 'Finance Horoscope', icon: 'cash-outline' },
  { name: 'Family Horoscope', icon: 'people-outline' },
  { name: 'Health Horoscope', icon: 'heart-outline' },
  { name: 'Education Horoscope', icon: 'school-outline' },
  { name: 'Gemstone Prediction', icon: 'diamond-outline' },
  { name: 'Yearly Horoscope', icon: 'calendar-outline' },
  { name: 'Numerology Horoscope', icon: 'calculator-outline' },
  { name: 'Kundli Dosh Calculation', icon: 'alert-circle-outline' },
  { name: 'Lal Kitab Prediction', icon: 'book-outline' },
  { name: 'Marriage Matching', icon: 'heart-circle-outline' },
  { name: 'Planet Transit Prediction', icon: 'planet-outline' },
  { name: 'In Depth Horoscope', icon: 'document-text-outline' },
  { name: '120 Year Dasha Analysis', icon: 'stopwatch-outline' },
  { name: '300 Yoga Calculation', icon: 'barbell-outline' },
  { name: 'Muhurat', icon: 'time-outline' },
];

const KundliScreen = () => {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  const insets = useSafeAreaInsets();
const Navigation = useNavigation() 
  const numColumns = 3;
  const itemSize = width / 3 - 22;

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
      onPress={() => Navigation.navigate('HoroscopeList', { category: item })}
      activeOpacity={0.9} style={tw`m-2`}>
        {!isDark ? (
          <LinearGradient
            colors={theme.gradient}
            style={[
              tw`rounded-2xl items-center justify-center`,
              {
                width: itemSize,
                height: itemSize,
                elevation: 5,
              },
            ]}
          >
            <Ionicons
              name={item.icon}
              size={28}
              color={theme.primary}
              style={tw`mb-2`}
            />
            <Text
              style={[
                tw`text-center text-[12px] font-semibold`,
                { color: theme.text },
              ]}
            >
              {item.name}
            </Text>
          </LinearGradient>
        ) : (
          <View
            style={[
              tw`rounded-2xl items-center justify-center`,
              {
                width: itemSize,
                height: itemSize,
                backgroundColor: '#1C1C1C',
                borderWidth: 1,
                borderColor: '#333',
              },
            ]}
          >
            <Ionicons
              name={item.icon}
              size={26}
              color={theme.primary}
              style={tw`mb-2`}
            />
            <Text
              style={[
                tw`text-center text-[12px] font-semibold`,
                { color: theme.text },
              ]}
            >
              {item.name}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* HEADER */}
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
            color: theme.text,
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
          Explore categories
        </Text>
      </View>

      {/* GRID */}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`p-2 pb-10`}
      />
    </SafeAreaView>
  );
};

export default KundliScreen;
