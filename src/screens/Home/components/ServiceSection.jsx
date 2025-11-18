import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import { useTheme } from '../../../Context/ThemContext';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const banners = [
  { id: 1, img: require('../../../assets/banner/Numerology Banner.png') },
  { id: 2, img: require('../../../assets/banner/Planet Transit Banner.png') },
  { id: 3, img: require('../../../assets/banner/Zodiac Sign Banner.png') },
];

const services = [
  { id: 0, name: 'Career Report', icon: 'briefcase-outline' },
  { id: 1, name: 'Finance Horoscope', icon: 'cash-outline' },
  { id: 2, name: 'Family Horoscope', icon: 'people-outline' },
  { id: 3, name: 'Health Horoscope', icon: 'medkit-outline' },
  { id: 4, name: 'Education Horoscope', icon: 'school-outline' },
  { id: 5, name: 'Gemstone Prediction', icon: 'diamond-outline' },
  { id: 6, name: 'Yearly Horoscope', icon: 'calendar-outline' },
  { id: 7, name: 'Numerology Horoscope', icon: 'calculator-outline' },
  { id: 8, name: 'Kundli Dosh Calculation', icon: 'warning-outline' },
  // { name: "Lal Kitab Prediction", icon: "book-outline" },
  // { name: "Marriage Matching", icon: "heart-outline" },
  // { name: "Planet Transit Prediction", icon: "planet-outline" },
  // { name: "In Depth Horoscope", icon: "layers-outline" },
  // { name: "120 Year Dasha Analysis", icon: "analytics-outline" },
  // { name: "300 Yoga Calculation", icon: "grid-outline" },
  // { name: "Muhurat", icon: "time-outline" },
];

export default function ServiceSection() {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  const scrollRef = useRef(null);
  const Navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const iconSize = width > 600 ? 40 : 26;
  const cardSize = width > 600 ? 90 : 64;
  const columns = width > 600 ? '22%' : '30%';

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
                  width: '100%',
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
        <View style={tw`flex-row items-center justify-between mb-4 mx-5`}>
          <Text style={[tw`text-lg font-bold`, { color: theme.text }]}>
            Explore Our Services
          </Text>

          <TouchableOpacity
            onPress={() =>
              Navigation.navigate('Kundli', { screen: 'KundliScreen' })
            }
            activeOpacity={0.8}
          >
            <Text
              style={[
                tw`text-sm font-semibold`,
                { color: isDark ? '#FFD700' : '#E67E22' },
              ]}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row flex-wrap justify-between mt-3`}>
          {services.map((s, i) => (
            <TouchableOpacity
              onPress={() =>
                Navigation.navigate('Kundli', {
                  screen: 'KundliScreen',
                  params: { serviceId: s.id },
                })
              }
              key={i}
              activeOpacity={0.8}
              style={[{ width: columns }, tw`mb-10 items-center`]}
            >
              <LinearGradient
                colors={['#FFD700', '#FFB347', '#FF9933']}
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
