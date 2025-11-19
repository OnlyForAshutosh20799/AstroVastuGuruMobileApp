// AstrologerRegistration.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../../../Context/ThemContext';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const AstrologerRegistration = () => {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

  const navigation = useNavigation()

  const inputBg = isDark ? '#1E1E1E' : '#F5F5F5';
  const borderColor = isDark ? '#333' : '#DDD';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    instagramUrl: '',
    youtubeUrl: '',
    instagramFollowers: '',
    youtubeFollowers: '',
    isAstrologer: '',
    hearAboutUs: '',
    timeCommitment: '',
    fieldOfExpertise: '',
    yearsOfExperience: '',
    fieldOfAstrology: '',
    whyJoin: '',
    aboutYourself: '',
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form Submitted:', formData);
    alert('Submitted successfully!');
  };

  const RadioButton = ({ selected, onPress, label }) => (
    <TouchableOpacity style={tw`flex-row items-center mb-3`} onPress={onPress}>
      <View
        style={[
          tw`w-5 h-5 rounded-full border-2 items-center justify-center mr-2`,
          selected
            ? { borderColor: theme.primary, backgroundColor: theme.primary }
            : { borderColor: theme.subText },
        ]}
      >
        {selected && <View style={tw`w-2.5 h-2.5 rounded-full bg-white`} />}
      </View>
      <Text style={{ color: theme.text, fontSize: 14 }}>{label}</Text>
    </TouchableOpacity>
  );

  const inputStyle = [
    tw`border rounded-xl px-3 py-2 mb-3`,
    { borderColor, backgroundColor: inputBg, color: theme.text, fontSize: 14 },
  ];

  const hearAboutUsOptions = ['Google', 'YouTube', 'Instagram', 'Facebook', 'Others'];
  const timeCommitmentOptions = ['1 hour', '3 hours', '6 hours', 'More than 6 hours'];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={tw`p-4 pb-10`}>
        {/* HEADER */}
        <View style={tw`items-center mb-4`}>
          <Text style={[tw`text-2xl font-bold`, { color: theme.primary }]}>
            AstroVastuGuru
          </Text>
          <Text style={[tw`text-sm mt-1`, { color: theme.text }]}>
            Partner Registration
          </Text>
          <TouchableOpacity
          onPress={()=> navigation.navigate('Login Form') }
          style={tw`mt-2`}>
            <Text style={{ color: theme.primary, fontSize: 13, fontWeight: '500' }}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* FORM CONTAINER */}
        <View
          style={[
            tw`rounded-2xl p-4`,
            { backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
          ]}
        >
          {/* Personal Info */}
          <Text style={[tw`text-lg font-bold mb-3`, { color: theme.text }]}>Personal Information</Text>

          <TextInput
            style={inputStyle}
            placeholder="Full Name"
            placeholderTextColor={theme.subText}
            value={formData.fullName}
            onChangeText={t => updateFormData('fullName', t)}
          />

          <TextInput
            style={inputStyle}
            placeholder="Email Address"
            placeholderTextColor={theme.subText}
            keyboardType="email-address"
            value={formData.email}
            onChangeText={t => updateFormData('email', t)}
          />

          <TextInput
            style={inputStyle}
            placeholder="Phone Number"
            placeholderTextColor={theme.subText}
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={t => updateFormData('phone', t)}
          />

          <View style={[tw`border rounded-xl mb-3`, { borderColor }]}>
            <Picker
              selectedValue={formData.gender}
              onValueChange={v => updateFormData('gender', v)}
              style={{ color: theme.text, fontSize: 14 }}
              dropdownIconColor={theme.primary}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          {/* Social Media */}
          <Text style={[tw`text-lg font-bold my-3`, { color: theme.text }]}>Social Media (Optional)</Text>
          <TextInput
            style={inputStyle}
            placeholder="Instagram URL"
            placeholderTextColor={theme.subText}
            value={formData.instagramUrl}
            onChangeText={t => updateFormData('instagramUrl', t)}
          />
          <TextInput
            style={inputStyle}
            placeholder="YouTube URL"
            placeholderTextColor={theme.subText}
            value={formData.youtubeUrl}
            onChangeText={t => updateFormData('youtubeUrl', t)}
          />

          {/* Instagram & YouTube Followers */}
          <View style={[tw`border rounded-xl mb-3`, { borderColor }]}>
            <Picker
              selectedValue={formData.instagramFollowers}
              style={{ color: theme.text, fontSize: 14 }}
              onValueChange={v => updateFormData('instagramFollowers', v)}
            >
              <Picker.Item label="Instagram Followers" value="" />
              <Picker.Item label="0 - 1K" value="0-1000" />
              <Picker.Item label="1K - 10K" value="1001-10000" />
              <Picker.Item label="10K - 50K" value="10001-50000" />
              <Picker.Item label="50K+" value="50001+" />
            </Picker>
          </View>

          <View style={[tw`border rounded-xl mb-4`, { borderColor }]}>
            <Picker
              selectedValue={formData.youtubeFollowers}
              style={{ color: theme.text, fontSize: 14 }}
              onValueChange={v => updateFormData('youtubeFollowers', v)}
            >
              <Picker.Item label="YouTube Subscribers" value="" />
              <Picker.Item label="0 - 1K" value="0-1000" />
              <Picker.Item label="1K - 10K" value="1001-10000" />
              <Picker.Item label="10K - 50K" value="10001-50000" />
              <Picker.Item label="50K+" value="50001+" />
            </Picker>
          </View>

          {/* Astrologer Info */}
          <Text style={[tw`text-lg font-bold mt-2 mb-2`, { color: theme.text }]}>Basic Information</Text>
          <Text style={{ color: theme.text, fontSize: 13, marginBottom: 6 }}>Are you an astrologer?</Text>
          <RadioButton selected={formData.isAstrologer === 'yes'} onPress={() => updateFormData('isAstrologer', 'yes')} label="Yes" />
          <RadioButton selected={formData.isAstrologer === 'no'} onPress={() => updateFormData('isAstrologer', 'no')} label="No" />

          <Text style={{ color: theme.text, fontSize: 13, marginVertical: 6 }}>How did you hear about us?</Text>
          {hearAboutUsOptions.map(item => (
            <RadioButton
              key={item}
              selected={formData.hearAboutUs === item.toLowerCase()}
              onPress={() => updateFormData('hearAboutUs', item.toLowerCase())}
              label={item}
            />
          ))}

          <Text style={{ color: theme.text, fontSize: 13, marginVertical: 6 }}>Daily time commitment?</Text>
          {timeCommitmentOptions.map(time => (
            <RadioButton
              key={time}
              selected={formData.timeCommitment === time}
              onPress={() => updateFormData('timeCommitment', time)}
              label={time}
            />
          ))}

          {/* Professional Details */}
          <Text style={[tw`text-lg font-bold mt-3 mb-2`, { color: theme.text }]}>Professional Details</Text>

          <View style={[tw`border rounded-xl mb-3`, { borderColor }]}>
            <Picker
              selectedValue={formData.fieldOfExpertise}
              style={{ color: theme.text, fontSize: 14 }}
              onValueChange={v => updateFormData('fieldOfExpertise', v)}
            >
              <Picker.Item label="Field of Expertise" value="" />
              <Picker.Item label="Vedic Astrology" value="vedic" />
              <Picker.Item label="Western Astrology" value="western" />
              <Picker.Item label="Numerology" value="numerology" />
              <Picker.Item label="Palmistry" value="palmistry" />
              <Picker.Item label="Vastu Shastra" value="vastu" />
              <Picker.Item label="Tarot Reading" value="tarot" />
            </Picker>
          </View>

          <View style={[tw`border rounded-xl mb-3`, { borderColor }]}>
            <Picker
              selectedValue={formData.yearsOfExperience}
              style={{ color: theme.text, fontSize: 14 }}
              onValueChange={v => updateFormData('yearsOfExperience', v)}
            >
              <Picker.Item label="Years of Experience" value="" />
              <Picker.Item label="0-1 years" value="0-1" />
              <Picker.Item label="1-3 years" value="1-3" />
              <Picker.Item label="3-5 years" value="3-5" />
              <Picker.Item label="5-10 years" value="5-10" />
              <Picker.Item label="10+ years" value="10+" />
            </Picker>
          </View>

          <View style={[tw`border rounded-xl mb-3`, { borderColor }]}>
            <Picker
              selectedValue={formData.fieldOfAstrology}
              style={{ color: theme.text, fontSize: 14 }}
              onValueChange={v => updateFormData('fieldOfAstrology', v)}
            >
              <Picker.Item label="Specialization Area" value="" />
              <Picker.Item label="Birth Chart" value="birth-chart" />
              <Picker.Item label="Career" value="career" />
              <Picker.Item label="Relationship" value="relationship" />
              <Picker.Item label="Finance" value="financial" />
              <Picker.Item label="Health" value="medical" />
              <Picker.Item label="Muhurta" value="muhurta" />
            </Picker>
          </View>

          {/* Text Areas */}
          <TextInput
            style={[tw`border rounded-xl px-3 py-2 mb-3`, { borderColor, backgroundColor: inputBg, color: theme.text, fontSize: 14, height: 80, textAlignVertical: 'top' }]}
            placeholder="Why join AstroVastuGuru?"
            placeholderTextColor={theme.subText}
            multiline
            value={formData.whyJoin}
            onChangeText={t => updateFormData('whyJoin', t)}
          />

          <TextInput
            style={[tw`border rounded-xl px-3 py-2 mb-4`, { borderColor, backgroundColor: inputBg, color: theme.text, fontSize: 14, height: 100, textAlignVertical: 'top' }]}
            placeholder="About yourself"
            placeholderTextColor={theme.subText}
            multiline
            value={formData.aboutYourself}
            onChangeText={t => updateFormData('aboutYourself', t)}
          />

          {/* Submit Button */}
          <LinearGradient
            colors={['#FFD54F', '#FFA000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={tw`px-6 py-3 rounded-xl mt-4`}
          >
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={tw`text-white font-semibold text-center text-base`}>Submit Application</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AstrologerRegistration;
