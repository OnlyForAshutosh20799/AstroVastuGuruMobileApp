// components/BookPujaMainSubScreen.jsx
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../Context/ThemContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import BookNowModal from './BookNowModal';

const { width } = Dimensions.get('window');
const isTablet = width >= 768; // ✅ add this line

export default function BookPujaMainSubScreen() {
  const { theme } = useTheme();
  const route = useRoute();
  const { item } = route.params || {};

  const isDark = theme.mode === 'dark';

  const [showModal, setShowModal] = useState(false);

  const benefits = [
    'Pooja Space Booking',
    'Fresh Fruits and Flowers',
    'Priest Dakshina, General Donations and Prasad',
    'Priest Fees along with Breakfast or Lunch',
    'Complete Pooja Samagri',
    'Printed Customer Life Prediction Report',
    'Energized Rudraksha and Yantra',
    'Free Shipping for the Prasad Box',
  ];

  return (
    <ScrollView
      style={[tw`flex-1`, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View>
        {/* Banner Image */}
        <Image
          source={{
            uri:
              item?.image ||
              'https://duastro.in/cdn/shop/files/Puja_banner.jpg?v=1711032084',
          }}
          style={{
            width: width,
            height: width * 0.7,
            resizeMode: 'cover',
          }}
        />

        {/* Content Section */}
        <View style={[tw`p-5`, { backgroundColor: theme.background }]}>
          {/* Title */}
          <View style={tw`flex-row items-center justify-between mb-2`}>
            <Text
              style={[
                tw`font-extrabold mb-2`,
                {
                  fontSize: 22,
                  color: theme.text,
                },
              ]}
            >
              {item?.title || 'Surya Shanti Puja'}
            </Text>

            {/* Book Now Button */}
            <View style={tw` items-center`}>
              <LinearGradient
                colors={['#E91E63', '#FF9800']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`rounded-full`}
              >
                <TouchableOpacity
                  onPress={() => setShowModal(true)}
                  activeOpacity={0.9}
                  style={tw`flex-row items-center justify-center px-4 py-2 rounded-full`}
                >
                  <Text
                    style={[
                      tw`text-white text-xs font-semibold`,
                      { fontSize: 16, letterSpacing: 0.5 },
                    ]}
                  >
                    Book Now
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/* Description */}
          <Text
            style={[
              tw`leading-5 mb-4`,
              {
                color: theme.subText,
                fontSize: 14,
              },
            ]}
          >
            {item.desc || 'No Description available'}
          </Text>

          {/* Subheading */}
          <Text
            style={[
              tw`font-semibold mb-3`,
              {
                color: theme.text,
                fontSize: 16,
              },
            ]}
          >
            Pooja Package Includes the Following at No Extra Cost:
          </Text>

          {/* Benefit List */}
          {benefits.map((benefit, index) => (
            <View key={index} style={tw`flex-row items-start mb-2`}>
              <Ionicons
                name="checkmark-circle-outline"
                size={18}
                color={isDark ? '#FFD700' : '#FF9933'}
                style={tw`mt-0.5 mr-2`}
              />
              <Text
                style={[
                  tw`flex-1`,
                  {
                    color: theme.subText,
                    fontSize: 14,
                    lineHeight: 20,
                  },
                ]}
              >
                {benefit}
              </Text>
            </View>
          ))}
        </View>

        {/* Vertical timeline style */}
        <View style={tw`items-center`}>
          <Text
            style={[
              tw`font-bold mb-1`,
              { color: theme.text, fontSize: isTablet ? 25 : 21 },
            ]}
          >
            Pooja Steps
          </Text>
        </View>
        {[
          {
            title: 'BOOK POOJA',
            desc: 'Book the Surya Shanti Puja or Sun Shanti Pooja with your complete date of birth and detailed requirements.',
          },
          {
            title: 'POOJA DATE & TIME',
            desc: 'You will receive Pooja Date and Time via call/Whatsapp/Email from an astrologer within 24 hours of placing your order.',
          },
          {
            title: 'JOIN POOJA ONLINE',
            desc: 'On the day of Surya Shanti Puja or Sun Shanti Pooja, you are invited to join via a live pooja link shared by the astrologer.',
          },
          {
            title: 'KUNDLI & ANALYSE',
            desc: 'After Surya Shanti Puja or Sun Shanti Pooja, the astrologer will analyse your Kundli and provide printed Life Prediction with remedies.',
          },
          {
            title: 'PRASAD BOX',
            desc: 'After the completion, you’ll receive a special Prasad Box (5 Mukhi Rudhraksha, Pooja Yantra, Life Prediction report, and Prasad) free at your doorstep within 8-10 days.',
          },
        ].map((step, index) => (
          <View key={index} style={tw`flex-row mb-8 px-5`}>
            {/* Left vertical line */}
            <View style={tw`items-center`}>
              <View
                style={[
                  tw`w-3 h-3 rounded-full`,
                  { backgroundColor: theme.primary },
                ]}
              />
              {index !== 4 && (
                <View
                  style={[
                    tw`w-0.5 flex-1`,
                    { backgroundColor: theme.primary, opacity: 0.5 },
                  ]}
                />
              )}
            </View>

            {/* Step Text */}
            <View style={tw`flex-1 ml-4`}>
              <Text
                style={[
                  tw`font-bold mb-1`,
                  { color: theme.text, fontSize: isTablet ? 16 : 14 },
                ]}
              >
                {step.title}
              </Text>
              <Text
                style={[
                  tw`text-justify`,
                  { color: theme.subText, fontSize: isTablet ? 14 : 12 },
                ]}
              >
                {step.desc}
              </Text>
            </View>
          </View>
        ))}

        {/* Book Now Button */}
        <View style={tw` items-center`}>
          <LinearGradient
            colors={['#E91E63', '#FF9800']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`rounded-full`}
          >
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              activeOpacity={0.9}
              style={tw`flex-row items-center justify-center px-5 py-2 rounded-full`}
            >
              <Text
                style={[
                  tw`text-white font-semibold`,
                  { fontSize: 16, letterSpacing: 0.5 },
                ]}
              >
                Book Now
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>

      <BookNowModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        item={item}
      />
    </ScrollView>
  );
}
