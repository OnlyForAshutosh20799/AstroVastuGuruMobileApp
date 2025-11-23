// KundliChatScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';
import { useTheme } from '../../../Context/ThemContext';
import { useRoute } from '@react-navigation/native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const isTablet = SCREEN_WIDTH >= 768;

// Local image path (you provided)


export default function KundliChatScreen() {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

   const route = useRoute();
    const { data, service } = route.params;
    console.log("sflkdjfds", data, service)
    const LOCAL_BANNER = { uri: data.image };

  // form state
  const [fullName, setFullName] = useState('');
  const [dobDD, setDobDD] = useState('');
  const [dobMM, setDobMM] = useState('');
  const [dobYYYY, setDobYYYY] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [country, setCountry] = useState('India');
  const [stateVal, setStateVal] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  return (
    <View
      style={[
        tw`flex-1`,
        { backgroundColor: theme.background, },
      ]}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />

      <KeyboardAvoidingView style={tw`flex-1`} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
        >
          {/* Header / Banner */}
          <View style={tw`px-4 pt-4`}>
            <View
              style={[
                tw`rounded-lg overflow-hidden`,
                { backgroundColor: isDark ? '#111' : '#E6EEF7' },
              ]}
            >
              <View style={[tw` px-3 py-2 rounded-md`, { backgroundColor: '#ff7a00' }]}>
                <Text style={tw`text-sm font-bold text-white`}>Get First 15Rs FREE Chat</Text>
                <Text style={tw`text-xs text-white`}>Use your minutes anytime, any device</Text>
              </View>
            </View>
          </View>

          {/* Main Card */}
          <View style={tw`px-4 mt-2`}>
            <View
              style={[
                tw`rounded-2xl p-4`,
                {
                  backgroundColor: isDark ? '#121212' : '#fff',
                  borderWidth: 1,
                  borderColor: isDark ? '#222' : '#F0C27B',
                  shadowColor: '#000',
                  elevation: 6,
                },
              ]}
            >
              <Text style={[tw`text-xl font-semibold text-center mb-3`, { color: theme.text }]}>
                Start Your {service} with
              </Text>

              {/* profile small circle */}
              <View style={tw`items-center mb-3`}>
                <Image
                  source={LOCAL_BANNER}
                  style={{ width: isTablet ? 96 : 72, height: isTablet ? 96 : 72, borderRadius: 999 }}
                  resizeMode="cover"
                />
                <Text style={[tw`mt-2 font-semibold`, { color: theme.text }]}>{data.name}</Text>
                <Text style={[tw`text-xs`, { color: theme.subText }]}>Language: {data.lang} · Price: ₹7/Min</Text>
              </View>

              {/* short description */}
               <Text style={[tw`text-sm mb-2 text-center`, { color: theme.subText }]}>
                  {data.name} is a certified astrologer with{' '}
                  {data.exp} years of experience. He specializes in {' '}
                  {data.skills?.join(', ')}{' '} and personalized guidance.
                </Text>

              {/* FORM */}
              <View style={tw`w-full`}>
                {/* Row: Full name + DOB */}
                <View style={isTablet ? tw`flex-row` : tw`flex-col`}>
                  <View style={[isTablet ? tw`w-1/2 pr-2` : tw`w-full mb-3`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>Full Name</Text>
                    <TextInput
                      value={fullName}
                      onChangeText={setFullName}
                      placeholder="Full Name"
                      placeholderTextColor={theme.subText}
                      style={[
                        tw`px-3 py-2 rounded-md`,
                        { backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                      ]}
                    />
                  </View>

                  <View style={[isTablet ? tw`w-1/2 pl-2` : tw`w-full`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>Date of Birth</Text>
                    <View style={tw`flex-row`}>
                      <TextInput
                        value={dobDD}
                        onChangeText={setDobDD}
                        placeholder="DD"
                        placeholderTextColor={theme.subText}
                        keyboardType="number-pad"
                        style={[
                          tw`px-3 py-2 rounded-md mr-2`,
                          { flex: 1, backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                        ]}
                      />
                      <TextInput
                        value={dobMM}
                        onChangeText={setDobMM}
                        placeholder="MM"
                        placeholderTextColor={theme.subText}
                        keyboardType="number-pad"
                        style={[
                          tw`px-3 py-2 rounded-md mr-2`,
                          { flex: 1, backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                        ]}
                      />
                      <TextInput
                        value={dobYYYY}
                        onChangeText={setDobYYYY}
                        placeholder="YYYY"
                        placeholderTextColor={theme.subText}
                        keyboardType="number-pad"
                        style={[
                          tw`px-3 py-2 rounded-md`,
                          { flex: 2, backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                        ]}
                      />
                    </View>
                  </View>
                </View>

                {/* Row: Time of Birth + Country */}
                <View style={isTablet ? tw`flex-row mt-3` : tw`flex-col mt-3`}>
                  <View style={[isTablet ? tw`w-1/2 pr-2` : tw`w-full mb-3`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>Time of Birth - 24Hour</Text>
                    <View style={tw`flex-row`}>
                      <TextInput
                        value={hour}
                        onChangeText={setHour}
                        placeholder="HH"
                        placeholderTextColor={theme.subText}
                        keyboardType="number-pad"
                        style={[
                          tw`px-3 py-2 rounded-md mr-2`,
                          { flex: 1, backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                        ]}
                      />
                      <TextInput
                        value={minute}
                        onChangeText={setMinute}
                        placeholder="MM"
                        placeholderTextColor={theme.subText}
                        keyboardType="number-pad"
                        style={[
                          tw`px-3 py-2 rounded-md`,
                          { flex: 1, backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                        ]}
                      />
                    </View>
                  </View>

                  <View style={[isTablet ? tw`w-1/2 pl-2` : tw`w-full`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>Birth Country</Text>
                    {/* If Picker from RN core not available, replace with @react-native-picker/picker */}
                    <View style={[tw`rounded-md`, { overflow: 'hidden', backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7' }]}>
                      <Picker
                        selectedValue={country}
                        onValueChange={(v) => setCountry(v)}
                        style={{ color: theme.text }}
                      >
                        <Picker.Item label="India" value="India" />
                        <Picker.Item label="USA" value="USA" />
                        <Picker.Item label="UK" value="UK" />
                      </Picker>
                    </View>
                  </View>
                </View>

                {/* Row: State + City */}
                <View style={isTablet ? tw`flex-row mt-3` : tw`flex-col mt-3`}>
                  <View style={[isTablet ? tw`w-1/2 pr-2` : tw`w-full mb-3`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>State</Text>
                    <View style={[tw`rounded-md`, { backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7' }]}>
                      <Picker selectedValue={stateVal} onValueChange={(v) => setStateVal(v)} style={{ color: theme.text }}>
                        <Picker.Item label="Select State" value="" />
                        <Picker.Item label="Maharashtra" value="Maharashtra" />
                        <Picker.Item label="Delhi" value="Delhi" />
                        <Picker.Item label="Karnataka" value="Karnataka" />
                      </Picker>
                    </View>
                  </View>

                  <View style={[isTablet ? tw`w-1/2 pl-2` : tw`w-full`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>City</Text>
                    <TextInput
                      value={city}
                      onChangeText={setCity}
                      placeholder="City"
                      placeholderTextColor={theme.subText}
                      style={[
                        tw`px-3 py-2 rounded-md`,
                        { backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                      ]}
                    />
                  </View>
                </View>

                {/* Row: Gender + Email */}
                <View style={isTablet ? tw`flex-row mt-3` : tw`flex-col mt-3`}>
                  <View style={[isTablet ? tw`w-1/2 pr-2` : tw`w-full mb-3`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>Gender</Text>
                    <View style={[tw`rounded-md`, { backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7' }]}>
                      <Picker selectedValue={gender} onValueChange={(v) => setGender(v)} style={{ color: theme.text }}>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                      </Picker>
                    </View>
                  </View>

                  <View style={[isTablet ? tw`w-1/2 pl-2` : tw`w-full`]}>
                    <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>Email</Text>
                    <TextInput
                      value={email}
                      onChangeText={setEmail}
                      placeholder="Email"
                      placeholderTextColor={theme.subText}
                      keyboardType="email-address"
                      style={[
                        tw`px-3 py-2 rounded-md`,
                        { backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                      ]}
                    />
                  </View>
                </View>

                {/* WhatsApp */}
                <View style={tw`mt-3`}>
                  <Text style={[tw`text-xs mb-1`, { color: theme.subText }]}>WhatsApp Number</Text>
                  <TextInput
                    value={whatsapp}
                    onChangeText={setWhatsapp}
                    placeholder="+91 98765 43210"
                    placeholderTextColor={theme.subText}
                    keyboardType="phone-pad"
                    style={[
                      tw`px-3 py-2 rounded-md`,
                      { backgroundColor: isDark ? '#1A1A1A' : '#F7F7F7', color: theme.text },
                    ]}
                  />
                </View>

                {/* Start Button */}
                <View style={tw`mt-6`}>
                  <TouchableOpacity
                    onPress={() => {
                      // do submit or navigation
                      console.log('Start Free Chat', { fullName, dobDD, dobMM, dobYYYY });
                    }}
                    style={[
                      tw`py-3 rounded-full items-center`,
                      { backgroundColor: '#e67e22' },
                    ]}
                  >
                    <Text style={tw`text-white font-semibold`}>Start My Free {service}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Why Trust section (compact mobile card) */}
          <View style={tw`px-4 mt-8`}>
            <Text style={[tw`text-lg font-bold mb-2`, { color: theme.text }]}>Why Trust AstroVastuGuru Free Kundli Software?</Text>
            <Text style={[tw`text-sm`, { color: theme.subText }]}>
              AstroVastuGuru prides ourselves on delivering expertise, authority and trustworthiness through meticulously crafted Vedic astrology software... Developed by Sudhir Saluja with over 20 years of experience.
            </Text>

            <View
              style={[
                tw`mt-4 p-3 rounded-lg`,
                { backgroundColor: isDark ? '#0f0f0f' : '#FFF4E6', borderWidth: 1, borderColor: isDark ? '#222' : '#F8D7A3' },
              ]}
            >
              <Text style={[tw`font-semibold mb-2`, { color: theme.text }]}>Our Unique Approach</Text>
              <Text style={{ color: theme.subText, fontSize: 13 }}>
                Unlike AI based prediction tools, AstroVastuGuru Free Kundli software is built on a foundation of detailed calculations personalised to each birth chart.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
