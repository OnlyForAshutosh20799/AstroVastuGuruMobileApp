import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import tw from 'twrnc';
import { useTheme } from '../../../Context/ThemContext';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const isTablet = SCREEN_WIDTH >= 768;

export default function DevNairProfile() {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

  const navigation = useNavigation()

  const route = useRoute();
  const { data } = route.params;

  const [astrologerData] = useState(data);
  const HERO_IMAGE = { uri: astrologerData.image };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      
      }}
    >
      <StatusBar
        translucent
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />

      <ScrollView
        showsVerticalScrollIndicator={false} 
        horizontal={false} 
        showsHorizontalScrollIndicator={false}
      >
        {/* Top Section */}
        <View style={tw`px-4 `}>
          <View style={tw`${isTablet ? 'flex-row' : ''}`}>
            {/* Text Section (fixed padding so text never hides) */}
            <View
              style={[
                isTablet ? tw`w-2/3 pr-4` : tw`w-full`,
                !isTablet && { paddingRight: 120 }, 
              ]}
            >
              <Text
                style={[
                  tw`text-2xl font-bold mb-2`,
                  { color: theme.text },
                  !isTablet && { marginTop: 40 }, // avoid overlapping
                ]}
              >
                I'm {astrologerData.name}
              </Text>

              <Text style={[tw`text-lg mb-3`, { color: theme.primary }]}>
                Your Pandit Acharya
              </Text>

              <Text style={[tw`text-sm mb-4`, { color: theme.subText }]}>
                I am a certified astrologer with {astrologerData.exp} of
                experience, specializing in {astrologerData.skills?.join(', ')}{' '}
                — available for consultation and long-term guidance.
              </Text>

              {/* Buttons */}
              <View style={tw`flex-row items-center mt-2`}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Book your Astrologer here', {
                      data: data,
                       service: 'Call',
                    })
                  }
                  style={[
                    tw`px-4 py-2 rounded-full mr-2`,
                    { backgroundColor: theme.primary },
                  ]}
                >
                  <Text style={tw`text-white`}>Call</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() =>
                    navigation.navigate('Book your Astrologer here', {
                      data: data,
                       service: 'Chat',
                    })
                  }
                  style={[
                    tw`px-4 py-2 rounded-full border`,
                    { borderColor: isDark ? '#666' : '#ccc' },
                  ]}
                >
                  <Text style={{ color: theme.text }}>Chat</Text>
                </TouchableOpacity>
              </View>

              {/* Rating */}
              <View style={tw`flex-row items-center mt-4`}>
                <View style={tw`bg-gray-500/20 px-3 py-1 rounded-lg mr-2`}>
                  <Text style={{ color: theme.text, fontSize: 12 }}>
                    {astrologerData.rating} ★
                  </Text>
                </View>

                <View style={tw`bg-gray-500/20 px-3 py-1 rounded-lg`}>
                  <Text style={{ color: theme.text, fontSize: 12 }}>
                    1000+ Consults
                  </Text>
                </View>
              </View>
            </View>

            {/* Avatar Section */}
            <View
              style={tw`${
                isTablet ? 'w-1/3 items-end' : 'absolute right-4 top-6'
              }`}
            >
              <View
                style={[
                  tw`rounded-full overflow-hidden`,
                  { borderWidth: 4, borderColor: isDark ? '#444' : '#ddd' },
                ]}
              >
                <Image
                  source={HERO_IMAGE}
                  style={isTablet ? tw`w-40 h-40` : { width: 100, height: 100 }}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Search Services */}
        <View
          style={{
            padding: 16,
            marginTop: 20,
            backgroundColor: isDark ? '#1E1E1E' : '#F1F5F9',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text
            style={[tw`text-base font-semibold mb-3`, { color: theme.text }]}
          >
            Find {astrologerData.name}'s Astrology Services
          </Text>


          {/* Popular Services */}
          <Text style={{ color: theme.subText, marginBottom: 8, fontSize: 13 }}>
            Popular services
          </Text>

          <View style={tw`flex-row flex-wrap`}>
            {['Career', 'Love', 'Finance', 'Education', 'Health'].map(s => (
              <TouchableOpacity
                key={s}
                style={[
                  tw`px-3 py-2 rounded-lg m-1`,
                  { backgroundColor: isDark ? '#222' : '#fff' },
                ]}
              >
                <Text style={{ color: theme.text }}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* About Me */}
        <View style={tw`p-4`}>
          <View
            style={[
              tw`rounded-2xl p-4`,
              {
                backgroundColor: isDark ? '#1B1B1B' : '#fff',
                shadowColor: '#000',
                elevation: 3,
              },
            ]}
          >
            <Text
              style={[tw`text-lg font-semibold mb-2`, { color: theme.text }]}
            >
              About Me
            </Text>

            <View style={tw`flex-row mt-2`}>
              <Image
                source={HERO_IMAGE}
                style={tw`w-20 h-20 rounded-lg mr-3`}
              />
              <View style={tw`flex-1`}>
                <Text style={[tw`text-sm mb-2`, { color: theme.subText }]}>
                  {astrologerData.name} is a certified astrologer with{' '}
                  {astrologerData.exp} years of experience. He specializes in
                  detailed readings and personalized guidance.
                </Text>

                <TouchableOpacity
                  style={[
                    tw`px-3 py-2 rounded-full w-36`,
                    { backgroundColor: theme.primary },
                  ]}
                >
                  <Text style={tw`text-white text-center`}>
                    Book Consultation
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
