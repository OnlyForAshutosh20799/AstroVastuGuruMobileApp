// src/screens/Astrologer/List/AstrologerListScreen.jsx
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import tw from "twrnc";
import { useTheme } from "../../../../Context/ThemContext";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const astrologers = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: ["Naomi Suzuki", "Rakesh Kapoor", "Ananya Kapoor"][i % 3],
  lang: ["Hindi", "English", "Chinese"][i % 3],
  skills: ["Love", "Career", "Marriage"],
  rating: (4.5 + Math.random() * 0.4).toFixed(1),
  exp: `${3 + i % 9} Years`,
  image:
    "https://randomuser.me/api/portraits/women/" + ((i % 40) + 1) + ".jpg",
}));

const AstrologerListScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("AstrologerProfile", { data: item })}
      activeOpacity={0.7}
      style={[
        tw`flex-row items-center py-3 px-4 mb-2`,
        {
          backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF",
          shadowColor: isDark ? "transparent" : "#000",
          shadowOpacity: 0.06,
          shadowRadius: 4,
          elevation: isDark ? 0 : 3,
          borderBottomWidth: 1,
          borderColor: isDark ? "#2A2A2A" : "#F1F1F1",
        },
      ]}
    >
      {/* Profile Image */}
      <Image
        source={{ uri: item.image }}
        style={{
          width: isTablet ? 70 : 50,
          height: isTablet ? 70 : 50,
          borderRadius: isTablet ? 18 : 14,
        }}
      />

      {/* Text Section */}
      <View style={tw`ml-3 flex-1`}>
        <View style={tw`flex-row justify-between`}>
          <Text
            style={{
              fontSize: isTablet ? 20 : 16,
              fontWeight: "600",
              color: isDark ? theme.text : "#111",
            }}
          >
            {item.name}
          </Text>
        </View>

        {/* Skills */}
        <Text
          style={{
            fontSize: isTablet ? 16 : 13,
            color: isDark ? "#BBBBBB" : "#666",
            marginTop: 2,
          }}
          numberOfLines={1}
        >
          {item.skills.join(", ")}
        </Text>

        {/* Language + Rating */}
        <View style={tw`flex-row items-center mt-1`}>
          <Text
            style={{
              fontSize: isTablet ? 15 : 12,
              color: isDark ? "#AAAAAA" : "#888",
            }}
          >
            {item.lang}
          </Text>

          <Text
            style={{
              marginLeft: 10,
              fontSize: isTablet ? 15 : 12,
              color: "#E67E22",
              fontWeight: "600",
            }}
          >
            ⭐ {item.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? theme.background : "#F2F2F2",
      }}
    >
      <FlatList
        data={astrologers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AstrologerListScreen;
