import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import { useTheme } from "../../../Context/ThemContext";
import LinearGradient from "react-native-linear-gradient";

const HoroscopeBookingModal = ({ visible, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [language, setLanguage] = useState("");
  const [coupon, setCoupon] = useState("");

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={[
          tw`flex-1 justify-center items-center px-4`,
          { backgroundColor: "rgba(0,0,0,0.6)" },
        ]}
      >
        <View
          style={[
            tw`w-full rounded-2xl overflow-hidden my-20`,
            {
              backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF",
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 5,
            },
          ]}
        >
          {/* Header */}
          <LinearGradient
            colors={["#FFA726", "#FF5722"]}
            style={tw`p-4 flex-row justify-between items-center`}
          >
            <Text style={tw`text-black text-base font-bold`}>
              BOOK 12 MONTH CAREER HOROSCOPE
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="black" />
            </TouchableOpacity>
          </LinearGradient>

          {/* Content */}
          <ScrollView showsVerticalScrollIndicator={false} style={tw`p-5`}>
            {/* Name */}
            <TextInput
              placeholder="Enter Full Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#999"
              style={[
                tw`border rounded-xl px-3 py-2 mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                  color: theme.text,
                },
              ]}
            />

            {/* Email */}
            <TextInput
              placeholder="Enter Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#999"
              keyboardType="email-address"
              style={[
                tw`border rounded-xl px-3 py-2 mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                  color: theme.text,
                },
              ]}
            />

            {/* Contact */}
            <TextInput
              placeholder="Enter Contact Number"
              keyboardType="numeric"
              value={contact}
              onChangeText={setContact}
              placeholderTextColor="#999"
              style={[
                tw`border rounded-xl px-3 py-2 mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                  color: theme.text,
                },
              ]}
            />

            {/* Gender Dropdown */}
            <View
              style={[
                tw`border rounded-xl mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                },
              ]}
            >
              <Picker
                selectedValue={gender}
                onValueChange={(v) => setGender(v)}
                dropdownIconColor={isDark ? "#fff" : "#333"}
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            {/* Date of Birth */}
            <Text style={[tw`font-semibold mb-1`, { color: theme.text }]}>
              Date of Birth
            </Text>
            <View style={tw`flex-row mb-3`}>
              <TextInput
                placeholder="DD"
                value={date.day}
                onChangeText={(t) => setDate({ ...date, day: t })}
                keyboardType="numeric"
                maxLength={2}
                style={[
                  tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                  {
                    borderColor: "#ddd",
                    backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                    color: theme.text,
                  },
                ]}
              />
              <TextInput
                placeholder="MM"
                value={date.month}
                onChangeText={(t) => setDate({ ...date, month: t })}
                keyboardType="numeric"
                maxLength={2}
                style={[
                  tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                  {
                    borderColor: "#ddd",
                    backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                    color: theme.text,
                  },
                ]}
              />
              <TextInput
                placeholder="YYYY"
                value={date.year}
                onChangeText={(t) => setDate({ ...date, year: t })}
                keyboardType="numeric"
                maxLength={4}
                style={[
                  tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                  {
                    borderColor: "#ddd",
                    backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                    color: theme.text,
                  },
                ]}
              />
            </View>

            {/* Time of Birth */}
            <Text style={[tw`font-semibold mb-1`, { color: theme.text }]}>
              Time of Birth
            </Text>
            <View style={tw`flex-row mb-3 items-center`}>
              <TextInput
                placeholder="HH"
                value={time.hour}
                onChangeText={(t) => setTime({ ...time, hour: t })}
                keyboardType="numeric"
                maxLength={2}
                style={[
                  tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                  {
                    borderColor: "#ddd",
                    backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                    color: theme.text,
                  },
                ]}
              />
              <Text style={[tw`text-lg font-bold`, { color: theme.subText }]}>
                :
              </Text>
              <TextInput
                placeholder="MM"
                value={time.minute}
                onChangeText={(t) => setTime({ ...time, minute: t })}
                keyboardType="numeric"
                maxLength={2}
                style={[
                  tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                  {
                    borderColor: "#ddd",
                    backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                    color: theme.text,
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() =>
                  setTime({ ...time, period: time.period === "AM" ? "PM" : "AM" })
                }
                style={[tw`rounded-lg px-3 py-2 mx-1`, { backgroundColor: "#FFB300" }]}
              >
                <Text style={tw`text-black font-bold`}>{time.period}</Text>
              </TouchableOpacity>
            </View>

            {/* Location Inputs */}
            <Text style={[tw`font-semibold mb-1`, { color: theme.text }]}>
              Birth Location
            </Text>
            <TextInput
              placeholder="Enter Country"
              value={country}
              onChangeText={setCountry}
              placeholderTextColor="#999"
              style={[
                tw`border rounded-xl px-3 py-2 mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                  color: theme.text,
                },
              ]}
            />

            <TextInput
              placeholder="Enter State"
              value={state}
              onChangeText={setState}
              placeholderTextColor="#999"
              style={[
                tw`border rounded-xl px-3 py-2 mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                  color: theme.text,
                },
              ]}
            />

            <TextInput
              placeholder="Enter City"
              value={city}
              onChangeText={setCity}
              placeholderTextColor="#999"
              style={[
                tw`border rounded-xl px-3 py-2 mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                  color: theme.text,
                },
              ]}
            />

            {/* Language Dropdown */}
            <View
              style={[
                tw`border rounded-xl mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                },
              ]}
            >
              <Picker
                selectedValue={language}
                onValueChange={(v) => setLanguage(v)}
                dropdownIconColor={isDark ? "#fff" : "#333"}
              >
                <Picker.Item label="Select Language" value="" />
                <Picker.Item label="English" value="english" />
                <Picker.Item label="Hindi" value="hindi" />
              </Picker>
            </View>

            {/* Coupon */}
            <TextInput
              placeholder="Enter Coupon Code"
              value={coupon}
              onChangeText={setCoupon}
              placeholderTextColor="#999"
              style={[
                tw`border rounded-xl px-3 py-2 mb-3`,
                {
                  borderColor: "#ddd",
                  backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                  color: theme.text,
                },
              ]}
            />

            {/* Payable Amount */}
            <Text
              style={[
                tw`text-base font-bold mb-4`,
                { color: theme.text },
              ]}
            >
              Payable Amount: <Text style={{ color: "#FF7043" }}>₹299 INR</Text>
            </Text>

            {/* Buttons */}
            <View style={tw`flex-row justify-between mt-2`}>
              <TouchableOpacity
                onPress={onClose}
                style={[tw`px-5 py-3 rounded-lg`, { backgroundColor: "#FFC107" }]}
              >
                <Text style={tw`text-black font-semibold`}>Back</Text>
              </TouchableOpacity>
              <LinearGradient
               colors={["#E91E63", "#FF9800"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`rounded-lg`}
              >
              <TouchableOpacity
                onPress={() => console.log("Next")}
                style={[tw`px-6 py-3 rounded-xl`,]}
              >
                <Text style={tw`text-white font-semibold`}>Order</Text>
              </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* Footer */}
            <Text
              style={[
                tw`text-xs text-center mt-5 mb-2`,
                { color: theme.subText },
              ]}
            >
              By choosing to continue you agree to our{" "}
              <Text style={{ color: "#FF7043" }}>Terms</Text> &{" "}
              <Text style={{ color: "#FF7043" }}>Privacy Policy</Text>.
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default HoroscopeBookingModal;
