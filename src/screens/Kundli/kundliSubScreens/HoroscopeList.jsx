import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import tw from 'twrnc';

import { useRoute } from '@react-navigation/native';
import { useTheme } from '../../../Context/ThemContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;
export const dummyBooks = {
  'Career Report': [
    {
      id: '1',
      title: '12 Month Career Horoscope',
      desc: 'Detailed month-wise career prediction to guide your professional journey.',
      image: 'https://source.unsplash.com/800x600/?career,success',
    },
    {
      id: '2',
      title: '24 Month Career Horoscope',
      desc: '2-year long career prediction with deep insights.',
      image: 'https://source.unsplash.com/800x600/?office,business',
    },
    {
      id: '3',
      title: '5 Year Career Horoscope',
      desc: 'Long-term professional progress and job stability analysis.',
      image: 'https://source.unsplash.com/800x600/?growth,chart',
    },
  ],

  'Finance Horoscope': [
    {
      id: '4',
      title: '12 Month Finance Prediction',
      desc: 'Understand your financial growth for the next 12 months.',
      image: 'https://source.unsplash.com/800x600/?finance,money',
    },
    {
      id: '5',
      title: '24 Month Finance Prediction',
      desc: '2-year financial roadmap with expenses and savings guidance.',
      image: 'https://source.unsplash.com/800x600/?budget,wealth',
    },
    {
      id: '6',
      title: '5 Year Finance Forecast',
      desc: 'Deep financial analysis for the next 5 years.',
      image: 'https://source.unsplash.com/800x600/?bank,investment',
    },
  ],

  'Family Horoscope': [
    {
      id: '7',
      title: '1 Year Family Horoscope',
      desc: 'Monthly predictions for your family life & relations.',
      image: 'https://source.unsplash.com/800x600/?family,happiness',
    },
    {
      id: '8',
      title: '2 Year Family Prediction',
      desc: 'Future insights into relationship growth and harmony.',
      image: 'https://source.unsplash.com/800x600/?family,love',
    },
    {
      id: '9',
      title: '5 Year Family Guidance',
      desc: 'Long-term family relationship prediction.',
      image: 'https://source.unsplash.com/800x600/?parents,children',
    },
  ],

  'Health Horoscope': [
    {
      id: '10',
      title: '1 Year Health Horoscope',
      desc: 'Yearly health overview with remedies.',
      image: 'https://source.unsplash.com/800x600/?health,wellness',
    },
    {
      id: '11',
      title: '2 Year Health Prediction',
      desc: 'Month-wise health progress & immunity insights.',
      image: 'https://source.unsplash.com/800x600/?fitness,wellbeing',
    },
    {
      id: '12',
      title: '5 Year Health Analysis',
      desc: 'Long-term wellbeing predictions.',
      image: 'https://source.unsplash.com/800x600/?healthy,lifestyle',
    },
  ],

  'Education Horoscope': [
    {
      id: '13',
      title: '1 Year Education Horoscope',
      desc: 'Detailed study performance analysis.',
      image: 'https://source.unsplash.com/800x600/?education,books',
    },
    {
      id: '14',
      title: '2 Year Study Forecast',
      desc: 'Academic progress prediction for next two years.',
      image: 'https://source.unsplash.com/800x600/?student,library',
    },
    {
      id: '15',
      title: '5 Year Education Insight',
      desc: 'Long-term study potential and success guidance.',
      image: 'https://source.unsplash.com/800x600/?books,study',
    },
  ],

  'Gemstone Prediction': [
    {
      id: '16',
      title: 'Lucky Gemstone Report',
      desc: 'Find your lucky gemstone based on horoscope.',
      image: 'https://source.unsplash.com/800x600/?gemstone,crystal',
    },
    {
      id: '17',
      title: 'Personalized Gem Recommendation',
      desc: 'Detailed gemstone selection guided by planets.',
      image: 'https://source.unsplash.com/800x600/?gem,jewelry',
    },
    {
      id: '18',
      title: 'Gemstone Effect Report',
      desc: 'Know how gemstones will affect your life.',
      image: 'https://source.unsplash.com/800x600/?stone,shine',
    },
  ],

  'Yearly Horoscope': [
    {
      id: '19',
      title: '2025 Yearly Horoscope',
      desc: 'Complete prediction for the upcoming year.',
      image: 'https://source.unsplash.com/800x600/?calendar,year',
    },
    {
      id: '20',
      title: 'Yearly Fortune Report',
      desc: 'Success, luck & challenges of the new year.',
      image: 'https://source.unsplash.com/800x600/?future,prediction',
    },
    {
      id: '21',
      title: 'Zodiac Year Analysis',
      desc: 'Yearly predictions based on your zodiac.',
      image: 'https://source.unsplash.com/800x600/?zodiac,stars',
    },
  ],

  'Numerology Horoscope': [
    {
      id: '22',
      title: 'Life Path Number Report',
      desc: 'Your numerology path & meaning.',
      image: 'https://source.unsplash.com/800x600/?numbers,numerology',
    },
    {
      id: '23',
      title: 'Numerology 2025 Forecast',
      desc: 'Yearly numerology prediction.',
      image: 'https://source.unsplash.com/800x600/?prediction,numbers',
    },
    {
      id: '24',
      title: 'Name Correction Report',
      desc: 'Check name vibration & correction suggestions.',
      image: 'https://source.unsplash.com/800x600/?letters,name',
    },
  ],

  'Kundli Dosh Calculation': [
    {
      id: '25',
      title: 'Manglik Dosh Report',
      desc: 'Check presence & remedies of Manglik dosh.',
      image: 'https://source.unsplash.com/800x600/?marriage,hindu',
    },
    {
      id: '26',
      title: 'Kaal Sarp Dosh Report',
      desc: 'Detailed Kaal Sarp analysis.',
      image: 'https://source.unsplash.com/800x600/?snake,horoscope',
    },
    {
      id: '27',
      title: 'Pitra Dosh Report',
      desc: 'Check Pitra dosh & remedies.',
      image: 'https://source.unsplash.com/800x600/?tradition,temple',
    },
  ],

  'Lal Kitab Prediction': [
    {
      id: '28',
      title: 'Lal Kitab Remedies',
      desc: 'Effective remedies based on Lal Kitab.',
      image: 'https://source.unsplash.com/800x600/?red,book',
    },
    {
      id: '29',
      title: 'Lal Kitab Horoscope',
      desc: 'Personalized Lal Kitab based prediction.',
      image: 'https://source.unsplash.com/800x600/?books,astrology',
    },
    {
      id: '30',
      title: 'Lal Kitab House Analysis',
      desc: 'Planet analysis as per Lal Kitab.',
      image: 'https://source.unsplash.com/800x600/?astrology,planet',
    },
  ],

  'Marriage Matching': [
    {
      id: '31',
      title: 'Kundli Matching Report',
      desc: 'Check gun milan score & compatibility.',
      image: 'https://source.unsplash.com/800x600/?wedding,couple',
    },
    {
      id: '32',
      title: 'Marriage Yoga Analysis',
      desc: 'When will you get married?',
      image: 'https://source.unsplash.com/800x600/?marriage,ring',
    },
    {
      id: '33',
      title: 'Love Compatibility Report',
      desc: 'Relationship prediction & compatibility.',
      image: 'https://source.unsplash.com/800x600/?love,romance',
    },
  ],

  'Planet Transit Prediction': [
    {
      id: '34',
      title: 'Saturn Transit Report',
      desc: 'Effects of Saturn (Shani) on life.',
      image: 'https://source.unsplash.com/800x600/?saturn,planet',
    },
    {
      id: '35',
      title: 'Jupiter Transit Report',
      desc: 'Jupiter blessings & challenges.',
      image: 'https://source.unsplash.com/800x600/?jupiter,space',
    },
    {
      id: '36',
      title: 'Rahu-Ketu Transit Analysis',
      desc: 'Understand Rahu-Ketu impact.',
      image: 'https://source.unsplash.com/800x600/?space,galaxy',
    },
  ],

  'In Depth Horoscope': [
    {
      id: '37',
      title: 'Full Kundli Report',
      desc: 'Complete 40+ page detailed horoscope.',
      image: 'https://source.unsplash.com/800x600/?book,pages',
    },
    {
      id: '38',
      title: 'In-Depth Life Analysis',
      desc: 'Deep study of career, health & marriage.',
      image: 'https://source.unsplash.com/800x600/?analysis,report',
    },
    {
      id: '39',
      title: 'Advanced Horoscope Report',
      desc: 'Premium level future prediction.',
      image: 'https://source.unsplash.com/800x600/?document,future',
    },
  ],

  '120 Year Dasha Analysis': [
    {
      id: '40',
      title: 'Vimshottari Dasha Report',
      desc: 'Full 120-year dasha timeline.',
      image: 'https://source.unsplash.com/800x600/?timeline,history',
    },
    {
      id: '41',
      title: 'Mahadasha Effects',
      desc: 'Current & upcoming mahadasha impacts.',
      image: 'https://source.unsplash.com/800x600/?stars,galaxy',
    },
    {
      id: '42',
      title: 'Antardasha Prediction',
      desc: 'Month-wise dasha analysis.',
      image: 'https://source.unsplash.com/800x600/?cosmos,space',
    },
  ],

  '300 Yoga Calculation': [
    {
      id: '43',
      title: 'Raj Yoga Report',
      desc: 'Check powerful yogas in your chart.',
      image: 'https://source.unsplash.com/800x600/?king,crown',
    },
    {
      id: '44',
      title: 'Vipreet Yoga Analysis',
      desc: 'Result of special yogas.',
      image: 'https://source.unsplash.com/800x600/?mystic,vedic',
    },
    {
      id: '45',
      title: 'Planet Yoga Report',
      desc: 'All yogas affecting your horoscope.',
      image: 'https://source.unsplash.com/800x600/?constellation,night',
    },
  ],

  Muhurat: [
    {
      id: '46',
      title: 'Marriage Muhurat',
      desc: 'Best dates for marriage.',
      image: 'https://source.unsplash.com/800x600/?calendar,dates',
    },
    {
      id: '47',
      title: 'Housewarming Muhurat',
      desc: 'Shubh grah pravesh timings.',
      image: 'https://source.unsplash.com/800x600/?home,house',
    },
    {
      id: '48',
      title: 'Business Muhurat',
      desc: 'Best muhurat for business start.',
      image: 'https://source.unsplash.com/800x600/?office,startup',
    },
  ],
};

const HoroscopeList = () => {
  const route = useRoute();
  const { category } = route.params;
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.name,
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
  }, [navigation, category]);

  // 👉 GET DATA BASED ON CATEGORY NAME
  const listData = dummyBooks[category.name];
  const insets = useSafeAreaInsets();

  const renderCard = ({ item }) => (
    <TouchableOpacity
    onPress={()=> navigation.navigate('KundliMainSubScreen', { item: item })}
      style={[
        tw`flex-row items-center rounded-2xl mb-3 mx-3 p-3`,
        {
          backgroundColor: isDark ? '#1E1E1E' : '#FFF',
          borderWidth: 1,
          borderColor: isDark ? '#333' : '#E5E7EB',
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 2,
        },
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 12,
          marginRight: 12,
        }}
      />

      <View style={tw`flex-1`}>
        <Text style={{ fontSize: 16, fontWeight: '700', color: theme.text }}>
          {item.title}
        </Text>

        <Text
          numberOfLines={3}
          style={{
            fontSize: 13,
            color: theme.subText,
            marginTop: 2,
          }}
        >
          {item.desc}
        </Text>
      </View>

      <TouchableOpacity
      onPress={()=> navigation.navigate('KundliMainSubScreen', { item: item })}
        style={[tw`rounded-full px-3 py-1`, { backgroundColor: theme.primary }]}
      >
        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 12 }}>
          Order Now
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: theme.background }]}>

      {/* List */}
      <FlatList
        data={listData}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </SafeAreaView>
  );
};

export default HoroscopeList;
