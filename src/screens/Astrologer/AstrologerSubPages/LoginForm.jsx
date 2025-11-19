// LoginForm.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../../Context/ThemContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login:', { emailOrMobile, password });
    alert('Logged in successfully!');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={tw`flex-1`}
      >
        <ScrollView contentContainerStyle={tw`flex-1 justify-center p-5`}>
          <View
            style={[
              tw`rounded-2xl p-5 border border-gray-400`,
              {
                backgroundColor:
                  theme.mode === 'dark'
                    ? 'rgba(0,0,0,0.6)'
                    : 'rgba(255,255,255,0.3)',
                
              },
            ]}
          >
            <Text
              style={[
                tw`text-2xl mb-6 text-center`,
                {
                  color: theme.primary,               
                },
              ]}
            >
              Partner Login
            </Text>

            <TextInput
              style={[
                tw`border rounded-xl px-3 py-3 mb-4`,
                {
                  borderColor: theme.primary,
                  backgroundColor:
                    theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.2)',
                  color: theme.text,
                  fontSize: 15,
                },
              ]}
              placeholder="Email or Mobile"
              placeholderTextColor={theme.subText}
              keyboardType="email-address"
              value={emailOrMobile}
              onChangeText={setEmailOrMobile}
            />

            <View
              style={[
                tw`border rounded-xl mb-4 flex-row items-center px-3`,
                {
                  borderColor: theme.primary,
                  backgroundColor:
                    theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.2)',
                },
              ]}
            >
              <TextInput
                style={[tw`flex-1 py-3`, { color: theme.text, fontSize: 15 }]}
                placeholder="Password"
                placeholderTextColor={theme.subText}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={22}
                  color={theme.subText}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={tw`mb-4`}
              onPress={() => alert('Forgot Password clicked')}
            >
              <Text style={{ color: theme.primary, fontSize: 13, textAlign: 'right' }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <LinearGradient
              colors={theme.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={tw`px-6 py-3 rounded-xl mb-4`}
            >
              <TouchableOpacity onPress={handleLogin}>
                <Text style={tw`text-white font-semibold text-center text-base`}>
                  Login
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <View style={tw`flex-row justify-center mt-3`}>
              <Text style={{ color: theme.subText, fontSize: 13 }}>
                Don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: theme.primary, fontSize: 13, fontWeight: '500' }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View style={tw`flex-row justify-center mt-6`}>
              <Ionicons name="star" size={20} color={theme.primary} style={tw`mx-2`} />
              <Ionicons name="moon" size={20} color={theme.primary} style={tw`mx-2`} />
              <Ionicons name="sunny" size={20} color={theme.primary} style={tw`mx-2`} />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
