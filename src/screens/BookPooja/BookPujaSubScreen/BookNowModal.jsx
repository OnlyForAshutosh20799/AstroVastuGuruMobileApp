// components/BookNowModal.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import { useTheme } from "../../../Context/ThemContext";

const BookNowModal = ({ visible, onClose, item }) => {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  // Date & Time States
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });

  const fields = [
    { label: "Name", placeholder: "Full Name" },
    { label: "Gender", placeholder: "Select" },
    { label: "Country", placeholder: "Select Country" },
    { label: "State", placeholder: "Select State" },
    { label: "City", placeholder: "Enter City" },
    { label: "Email", placeholder: "Enter Email" },
    { label: "Contact", placeholder: "Enter Contact Number" },
    { label: "Address", placeholder: "Address" },
    { label: "Zipcode", placeholder: "Enter Zipcode" },
  ];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View
        style={[
          tw`flex-1 justify-center items-center px-4 py-20`,
          { backgroundColor: "rgba(0,0,0,0.6)" },
        ]}
      >
        <View
          style={[
            tw`rounded-2xl overflow-hidden w-full`,
            { backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF" },
          ]}
        >
          {/* Header */}
          <LinearGradient
            colors={["#FFA726", "#FF5722"]}
            style={tw`p-4 flex-row justify-between items-center`}
          >
            <Text style={tw`text-white text-lg font-bold`}>
              Book {item?.title || "Horoscope"}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="white" />
            </TouchableOpacity>
          </LinearGradient>

          {/* Scrollable Form */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`p-4`}
          >
            {fields.map((field, i) => {
              // After Gender field, insert Date & Time
              if (field.label === "Gender") {
                return (
                  <View key={i}>
                    {/* Gender Field */}
                    <View style={tw`mb-3`}>
                      <Text
                        style={[
                          tw`mb-1 font-semibold`,
                          { color: theme.text, fontSize: 14 },
                        ]}
                      >
                        {field.label}
                      </Text>
                      <TextInput
                        placeholder={field.placeholder}
                        placeholderTextColor={theme.subText}
                        style={[
                          tw`border rounded-lg px-3 py-2`,
                          {
                            borderColor: "#ccc",
                            color: theme.text,
                            backgroundColor: isDark
                              ? "#2A2A2A"
                              : "#F9F9F9",
                          },
                        ]}
                      />
                    </View>

                    {/* --- Date Section --- */}
                    <View style={tw`mb-4`}>
                      <Text
                        style={[
                          tw`mb-1 font-semibold`,
                          { color: theme.text, fontSize: 14 },
                        ]}
                      >
                        Date of Birth
                      </Text>
                      <View style={tw`flex-row justify-between`}>
                        <TextInput
                          value={date.day}
                          onChangeText={(t) => setDate({ ...date, day: t })}
                          maxLength={2}
                          keyboardType="numeric"
                          placeholder="DD"
                          placeholderTextColor={theme.subText}
                          style={[
                            tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                            {
                              borderColor: "#ccc",
                              color: theme.text,
                              backgroundColor: isDark
                                ? "#2A2A2A"
                                : "#F9F9F9",
                            },
                          ]}
                        />
                        <TextInput
                          value={date.month}
                          onChangeText={(t) =>
                            setDate({ ...date, month: t })
                          }
                          maxLength={2}
                          keyboardType="numeric"
                          placeholder="MM"
                          placeholderTextColor={theme.subText}
                          style={[
                            tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                            {
                              borderColor: "#ccc",
                              color: theme.text,
                              backgroundColor: isDark
                                ? "#2A2A2A"
                                : "#F9F9F9",
                            },
                          ]}
                        />
                        <TextInput
                          value={date.year}
                          onChangeText={(t) =>
                            setDate({ ...date, year: t })
                          }
                          maxLength={4}
                          keyboardType="numeric"
                          placeholder="YYYY"
                          placeholderTextColor={theme.subText}
                          style={[
                            tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                            {
                              borderColor: "#ccc",
                              color: theme.text,
                              backgroundColor: isDark
                                ? "#2A2A2A"
                                : "#F9F9F9",
                            },
                          ]}
                        />
                      </View>
                    </View>

                    {/* --- Time Section --- */}
                    <View style={tw`mb-4`}>
                      <Text
                        style={[
                          tw`mb-1 font-semibold`,
                          { color: theme.text, fontSize: 14 },
                        ]}
                      >
                        Time of Birth
                      </Text>
                      <View style={tw`flex-row justify-between items-center`}>
                        <TextInput
                          value={time.hour}
                          onChangeText={(t) =>
                            setTime({ ...time, hour: t })
                          }
                          maxLength={2}
                          keyboardType="numeric"
                          placeholder="HH"
                          placeholderTextColor={theme.subText}
                          style={[
                            tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                            {
                              borderColor: "#ccc",
                              color: theme.text,
                              backgroundColor: isDark
                                ? "#2A2A2A"
                                : "#F9F9F9",
                            },
                          ]}
                        />
                        <Text style={[tw`text-lg font-bold`, { color: theme.subText }]}>
                          :
                        </Text>
                        <TextInput
                          value={time.minute}
                          onChangeText={(t) =>
                            setTime({ ...time, minute: t })
                          }
                          maxLength={2}
                          keyboardType="numeric"
                          placeholder="MM"
                          placeholderTextColor={theme.subText}
                          style={[
                            tw`border rounded-lg text-center flex-1 mx-1 py-2`,
                            {
                              borderColor: "#ccc",
                              color: theme.text,
                              backgroundColor: isDark
                                ? "#2A2A2A"
                                : "#F9F9F9",
                            },
                          ]}
                        />

                        {/* AM/PM Toggle */}
                        <TouchableOpacity
                          onPress={() =>
                            setTime((prev) => ({
                              ...prev,
                              period: prev.period === "AM" ? "PM" : "AM",
                            }))
                          }
                          style={[
                            tw`rounded-lg px-4 py-2 mx-1`,
                            {
                              backgroundColor:
                                time.period === "AM"
                                  ? "#FFA726"
                                  : "#FF5722",
                            },
                          ]}
                        >
                          <Text style={tw`text-white font-bold`}>
                            {time.period}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }

              // Other fields
              return (
                <View key={i} style={tw`mb-3`}>
                  <Text
                    style={[
                      tw`mb-1 font-semibold`,
                      { color: theme.text, fontSize: 14 },
                    ]}
                  >
                    {field.label}
                  </Text>
                  <TextInput
                    placeholder={field.placeholder}
                    placeholderTextColor={theme.subText}
                    style={[
                      tw`border rounded-lg px-3 py-2`,
                      {
                        borderColor: "#ccc",
                        color: theme.text,
                        backgroundColor: isDark ? "#2A2A2A" : "#F9F9F9",
                      },
                    ]}
                  />
                </View>
              );
            })}

            {/* Buttons */}
            <View style={tw`flex-row justify-between mt-5`}>
              <Pressable
                onPress={onClose}
                style={[tw`px-5 py-3 rounded-lg`, { backgroundColor: "#FFC107" }]}
              >
                <Text style={tw`text-black font-semibold`}>Back</Text>
              </Pressable>

              <LinearGradient
                colors={["#E91E63", "#FF9800"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={tw`rounded-lg`}
              >
                <TouchableOpacity style={tw`px-6 py-3`} onPress={onClose}>
                  <Text style={tw`text-white font-semibold`}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* Footer Text */}
            <Text
              style={[
                tw`text-xs text-center mt-4 mb-4`,
                { color: theme.subText },
              ]}
            >
              By continuing you agree to our{" "}
              <Text style={{ color: "#FF9800" }}>Terms</Text> &{" "}
              <Text style={{ color: "#FF9800" }}>Privacy Policy</Text>.
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default BookNowModal;
