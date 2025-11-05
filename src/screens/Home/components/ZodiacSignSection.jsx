import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { useTheme } from '../../../Context/ThemContext';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.40; // more compact card
const cardSpacing = 14;

const zodiacData = [
  {
    name: 'Aries',
    date: 'Mar 21 - Apr 19',
    tagline: 'The Bold Trailblazer 🔥',
    color: ['#FF8008', '#FFC837'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47043.png',
  },
  {
    name: 'Taurus',
    date: 'Apr 20 - May 20',
    tagline: 'The Earthly Comfort Seeker 🌿',
    color: ['#A8E063', '#56AB2F'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47219.png',
  },
  {
    name: 'Gemini',
    date: 'May 21 - Jun 20',
    tagline: 'The Dual Dreamer 🌙',
    color: ['#36D1DC', '#5B86E5'],
    icon: 'https://cdn-icons-png.flaticon.com/128/17926/17926014.png',
  },
  {
    name: 'Cancer',
    date: 'Jun 21 - Jul 22',
    tagline: 'The Gentle Guardian 💧',
    color: ['#FF5F6D', '#FFC371'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47321.png',
  },
  {
    name: 'Leo',
    date: 'Jul 23 - Aug 22',
    tagline: 'The Fearless Leader 🦁',
    color: ['#F7971E', '#FFD200'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47157.png',
  },
  {
    name: 'Virgo',
    date: 'Aug 23 - Sep 22',
    tagline: 'The Perfectionist Thinker 🌱',
    color: ['#11998E', '#38EF7D'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47038.png',
  },
  {
    name: 'Libra',
    date: 'Sep 23 - Oct 22',
    tagline: 'The Balancer of Worlds ⚖️',
    color: ['#DA22FF', '#9733EE'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47047.png',
  },
  {
    name: 'Scorpio',
    date: 'Oct 23 - Nov 21',
    tagline: 'The Mysterious Transformer 🦂',
    color: ['#EB3349', '#F45C43'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47183.png',
  },
  {
    name: 'Sagittarius',
    date: 'Nov 22 - Dec 21',
    tagline: 'The Freedom Seeker 🏹',
    color: ['#FFB75E', '#ED8F03'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47213.png',
  },
  {
    name: 'Capricorn',
    date: 'Dec 22 - Jan 19',
    tagline: 'The Ambitious Climber 🪴',
    color: ['#606c88', '#3f4c6b'],
    icon: 'https://cdn-icons-png.flaticon.com/128/7828/7828321.png',
  },
  {
    name: 'Aquarius',
    date: 'Jan 20 - Feb 18',
    tagline: 'The Visionary Innovator 🌊',
    color: ['#43C6AC', '#191654'],
    icon: 'https://cdn-icons-png.flaticon.com/128/5796/5796758.png',
  },
  {
    name: 'Pisces',
    date: 'Feb 19 - Mar 20',
    tagline: 'The Dreamy Healer 🐚',
    color: ['#00C9FF', '#92FE9D'],
    icon: 'https://cdn-icons-png.flaticon.com/128/47/47405.png',
  },
];

export default function ZodiacSignSection() {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

  const bgGradient = isDark ? ['#0F0F1A', '#1A1A2E'] : ['#FFF8E7', '#FFF1D6'];
  const titleColor = isDark ? '#F8F8FF' : '#4B2800';
  const subtitleColor = isDark ? '#C5C6D0' : '#6B4E16';

  return (
    <View style={[tw``, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[tw`mb-6`]}>
        <Text
          style={[tw`text-lg font-bold text-center`, { color: titleColor }]}
        >
          Discover Your{' '}
          <Text
            style={{
              backgroundColor: 'transparent',
              color: '#FF9933',
            }}
          >
            Zodiac Sign ✨
          </Text>
        </Text>
      </View>

      {/* Scrollable Cards */}
      <FlatList
        data={zodiacData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        snapToInterval={cardWidth + cardSpacing}
        decelerationRate="fast"
        contentContainerStyle={tw`px-4`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              tw`rounded-2xl overflow-hidden shadow-lg mb-5`,
              {
                width: cardWidth,
                marginRight: index === zodiacData.length - 1 ? 0 : cardSpacing,
              },
            ]}
          >
            <LinearGradient
              colors={item.color}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tw`p-4 h-45 rounded-2xl justify-between`}
            >
              {/* Zodiac Header */}
              <View style={tw`flex-row justify-between items-center`}>
                <View>
                  <Text style={tw`text-white text-lg font-bold`}>
                    {item.name}
                  </Text>
                  <Text style={tw`text-white/80 text-xs`}>{item.date}</Text>
                </View>
                <View
                  style={tw`w-10 h-10 rounded-xl bg-white/25 items-center justify-center overflow-hidden border border-white/20`}
                >
                  <Image
                    source={{ uri: item.icon }}
                    style={tw`w-7 h-7`}
                    resizeMode="contain"
                  />
                </View>
              </View>

              {/* Tagline */}
              <Text style={tw`text-white/90 italic text-[12px]`}>
                {item.tagline}
              </Text>

              {/* Button */}
              <TouchableOpacity
                style={tw`bg-white/25 border border-white/30 rounded-full px-4 py-2 items-center mt-2`}
              >
                <Text style={tw`text-white font-semibold text-xs`}>
                  Read Horoscope
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
