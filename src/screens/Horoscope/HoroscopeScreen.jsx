// HoroscopeScreen.jsx
import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TabView, TabBar } from 'react-native-tab-view';
import tw from 'twrnc';
import { useTheme } from '../../Context/ThemContext';
import { BlurView } from '@react-native-community/blur';
import { useRoute } from '@react-navigation/native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Responsive constants
const isTablet = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) >= 720;
const BANNER_HEIGHT = isTablet ? 180 : 140;
const CARD_SIZE = isTablet ? 120 : 100;
const SPACING = isTablet ? 20 : 16;

// -------------------------------------------------
// Data (unchanged)
// -------------------------------------------------
const banners = [
  require('../../assets/HoroscopeBanner/Daily Horoscope Banner Fixed.png'),
  require('../../assets/HoroscopeBanner/Love Horoscope Banner.png'),
  require('../../assets/HoroscopeBanner/Monthly Horoscope Banner.png'),
  require('../../assets/HoroscopeBanner/Today Prediction Banner.png'),
];

const zodiacDetails = {
  Aries: {
    love: 'Aries, your passion is powerful today. You may crave deeper emotional connection.',
    health:
      'Good day for fitness. Avoid over-exhaustion. Hydrate well and rest enough.',
    career: 'Career growth looks promising. A good moment to take initiative.',
    emotion: 'Your emotions may fluctuate, but positivity will dominate.',
    travel: 'Short-distance travel will be beneficial today.',
    luckyColors: ['Red', 'Orange'],
    luckyNumbers: [1, 9],
    luckyAlphabets: ['A', 'M'],
  },
  Taurus: {
    love: 'Taurus, romance flows naturally today. Communication strengthens bonds.',
    health: 'Focus on mental relaxation. Meditation helps.',
    career: 'Career stability improves today.',
    emotion: 'Steady emotional state with clarity of mind.',
    travel: 'Avoid long-distance travel today.',
    luckyColors: ['Blue', 'Pink'],
    luckyNumbers: [4, 6],
    luckyAlphabets: ['B', 'T'],
  },
  Gemini: {
    love: 'Gemini, you love with passion and hope. You give your all.',
    health: 'Take care of your sleep cycle and avoid stress.',
    career: 'Good time to start new work. Creativity is high.',
    emotion: 'Mixed emotions but manageable.',
    travel: 'Travel brings good experiences.',
    luckyColors: ['Red', 'Magenta'],
    luckyNumbers: [2, 5, 8],
    luckyAlphabets: ['S', 'V', 'L'],
  },
};

const zodiacs = [
  {
    name: 'Aries',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47043.png',
  },
  {
    name: 'Taurus',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47219.png',
  },
  {
    name: 'Gemini',
    icon: 'https://cdn-icons-png.flaticon.com/128/17926/17926014.png',
  },
  {
    name: 'Cancer',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47321.png',
  },
  { name: 'Leo', icon: 'https://cdn-icons-png.flaticon.com/128/47/47157.png' },
  {
    name: 'Virgo',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47038.png',
  },
  {
    name: 'Libra',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47047.png',
  },
  {
    name: 'Scorpio',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47183.png',
  },
  {
    name: 'Sagittarius',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47213.png',
  },
  {
    name: 'Capricorn',
    icon: 'https://cdn-icons-png.flaticon.com/128/7828/7828321.png',
  },
  {
    name: 'Aquarius',
    icon: 'https://cdn-icons-png.flaticon.com/128/5796/5796758.png',
  },
  {
    name: 'Pisces',
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47405.png',
  },
];

// -------------------------------------------------
// Horoscope Content Component
// -------------------------------------------------
const HoroscopeContent = ({ selectedSign, contentKey, theme, isDark }) => {


  const current = zodiacDetails[selectedSign] || zodiacDetails['Aries'];
  const blocks = ['love', 'health', 'career', 'emotion', 'travel'];

  return (
    <FlatList
      data={blocks}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <View
          style={[
            tw`mx-4 mb-4 p-5 rounded-2xl`,
            {
              backgroundColor: isDark
                ? 'rgba(255,255,255,0.05)'
                : 'rgba(255,255,255,0.9)',
              borderWidth: 1,
              borderColor: isDark
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.05)',
              shadowColor: '#000',
              shadowOpacity: isDark ? 0.3 : 0.08,
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 12,
              elevation: 5,
            },
          ]}
        >
          <Text
            style={[
              tw`text-lg font-bold mb-2 capitalize`,
              { color: theme.primary },
            ]}
          >
            {item}
          </Text>
          <Text
            style={{
              color: theme.text,
              fontSize: isTablet ? 17 : 15,
              lineHeight: 22,
            }}
          >
            {current[item]}
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

// -------------------------------------------------
// Main Screen Component
// -------------------------------------------------
export default function HoroscopeScreen() {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

  const route = useRoute();
    // const { item } = route.params;
    const item = route.params?.item;
  

  const [selectedSign, setSelectedSign] = useState('Aries');
  const [tabIndex, setTabIndex] = useState(1);
  const [routes] = useState([
    { key: 'yesterday', title: 'Yesterday' },
    { key: 'today', title: 'Today' },
    { key: 'tomorrow', title: 'Tomorrow' },
    { key: 'monthly', title: 'Monthly' },
    { key: 'yearly', title: 'Yearly' },
  ]);

  useEffect(() => {
  if (item?.name) {
    setSelectedSign(item.name);
  }
}, [item]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [bannerIndex, setBannerIndex] = useState(0);

  // Auto-play banner
  useEffect(() => {
    const id = setInterval(() => {
      const next = (bannerIndex + 1) % banners.length;
      flatListRef.current?.scrollToOffset({
        offset: next * SCREEN_WIDTH,
        animated: true,
      });
      setBannerIndex(next);
    }, 4000);
    return () => clearInterval(id);
  }, [bannerIndex]);

  // Render tab scene
  const renderScene = ({ route }) => (
    <HoroscopeContent
      selectedSign={selectedSign}
      contentKey={route.key}
      theme={theme}
      isDark={isDark}
    />
  );

  // Custom TabBar
  const renderTabBar = props => (
    <View
      style={[
        tw`mx-4 mb-2 rounded-2xl overflow-hidden border`,
        {
          backgroundColor: isDark
            ? 'rgba(255,255,255,0.05)'
            : 'rgba(255,255,255,0.9)',
          borderWidth: 1,
          borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          shadowColor: '#000',
          shadowOpacity: isDark ? 0.3 : 0.08,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 12,
          elevation: 5,
        },
      ]}
    >
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: theme.primary,
          height: 3,
          borderRadius: 2,
        }}
        style={{ backgroundColor: 'transparent', elevation: 0 }}
        labelStyle={{
          fontWeight: '700',
          color: isDark ? '#fff' : '#222',
          textTransform: 'capitalize',
          fontSize: isTablet ? 14 : 13,
        }}
        activeColor={theme.primary}
        inactiveColor={isDark ? '#aaa' : '#666'}
        pressColor={theme.primary + '40'}
        scrollEnabled
        tabStyle={{ width: Math.max(100, SCREEN_WIDTH / 5.5) }}
      />
    </View>
  );

  // Safe area padding for notch & home indicator
  const statusBarHeight = StatusBar.currentHeight || 0;
  const topPadding = Platform.OS === 'android' ? statusBarHeight : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar
        translucent={false}
        backgroundColor={theme.background}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      <View style={[tw`flex-1`, { backgroundColor: theme.background }]}>
        <FlatList
          data={[]}
          keyExtractor={() => 'dummy'}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              {/* Banner Section */}
              <View
                style={{ paddingTop: topPadding, height: BANNER_HEIGHT + 60 }}
              >
                <Animated.FlatList
                  ref={flatListRef}
                  data={banners}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, i) => i.toString()}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                  )}
                  renderItem={({ item }) => (
                    <Image
                      source={item}
                      style={{
                        width: SCREEN_WIDTH - 32,
                        height: BANNER_HEIGHT,
                        marginHorizontal: 16,
                        borderRadius: 20,
                      }}
                      resizeMode="cover"
                    />
                  )}
                />
              </View>

              {/* Title */}
              <View style={tw`px-5 pt-2`}>
                <Text
                  style={[
                    tw`font-extrabold`,
                    { fontSize: isTablet ? 36 : 30, color: theme.primary },
                  ]}
                >
                  Daily Horoscope
                </Text>
              </View>

              {/* Zodiac Signs */}
              <View style={tw`px-4 pt-5 pb-3`}>
                <FlatList
                  horizontal
                  data={zodiacs}
                  keyExtractor={item => item.name}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 8 }}
                  renderItem={({ item }) => {
                    const isSelected = selectedSign === item.name;
                    return (
                      <TouchableOpacity
                        onPress={() => setSelectedSign(item.name)}
                        style={{ alignItems: 'center', marginHorizontal: 8 }}
                        activeOpacity={0.7}
                      >
                        <View
                          style={{
                            width: CARD_SIZE,
                            height: CARD_SIZE,
                            borderRadius: CARD_SIZE / 2,
                            backgroundColor: isDark ? '#000' : '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: isSelected ? 3 : 1,
                            borderColor: isSelected
                              ? theme.primary
                              : isDark
                              ? '#444'
                              : '#ddd',
                            padding: isTablet ? 18 : 14,
                          }}
                        >
                          <Image
                            source={{ uri: item.icon }}
                            style={{
                              width: isTablet ? 60 : 48,
                              height: isTablet ? 60 : 48,
                              tintColor: isSelected
                                ? theme.primary
                                : isDark
                                ? '#ccc'
                                : '#555',
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            marginTop: 8,
                            fontWeight: '600',
                            fontSize: isTablet ? 14 : 12,
                            color: isSelected ? theme.primary : theme.text,
                          }}
                        >
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>

              {/* Lucky Items Card */}
              <View style={tw`mx-4 mt-5 mb-6`}>
                <View
                  style={[
                    tw`p-5 rounded-2xl overflow-hidden border shadow-3xl`,
                    {
                      backgroundColor: isDark
                        ? 'rgba(255,255,255,0.05)'
                        : 'rgba(255,255,255,0.9)',
                      borderWidth: 1,
                      borderColor: isDark
                        ? 'rgba(255,255,255,0.1)'
                        : 'rgba(0,0,0,0.05)',
                      shadowColor: '#000',
                      shadowOpacity: isDark ? 0.3 : 0.08,
                      shadowOffset: { width: 0, height: 4 },
                      shadowRadius: 12,
                      elevation: 5,
                    },
                  ]}
                >
                  <View
                    colors={
                      isDark
                        ? ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.02)']
                        : ['rgba(255,255,255,0.9)', 'rgba(240,240,240,0.7)']
                    }
                    style={tw`absolute inset-0`}
                  />
                  <View style={tw`relative z-10`}>
                    <Text
                      style={[
                        tw`text-xl font-bold mb-3`,
                        { color: theme.primary },
                      ]}
                    >
                      {selectedSign} Lucky Items
                    </Text>
                    <View style={tw`space-y-1`}>
                      <Text style={{ color: theme.text, fontSize: 15 }}>
                        Colors:{' '}
                        {(
                          zodiacDetails[selectedSign] || zodiacDetails['Aries']
                        ).luckyColors.join(', ')}
                      </Text>
                      <Text style={{ color: theme.text, fontSize: 15 }}>
                        Numbers:{' '}
                        {(
                          zodiacDetails[selectedSign] || zodiacDetails['Aries']
                        ).luckyNumbers.join(', ')}
                      </Text>
                      <Text style={{ color: theme.text, fontSize: 15 }}>
                        Alphabets:{' '}
                        {(
                          zodiacDetails[selectedSign] || zodiacDetails['Aries']
                        ).luckyAlphabets.join(', ')}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </>
          }
          // TabView Footer - Full height, no cutoff
          ListFooterComponent={
            <View style={{ flex: 1, minHeight: SCREEN_HEIGHT * 0.8 }}>
              <TabView
                navigationState={{ index: tabIndex, routes }}
                renderScene={renderScene}
                onIndexChange={setTabIndex}
                initialLayout={{ width: SCREEN_WIDTH }}
                renderTabBar={renderTabBar}
                style={{ flex: 1 }}
              />
            </View>
          }
          renderItem={() => null}
        />
      </View>
    </SafeAreaView>
  );
}
