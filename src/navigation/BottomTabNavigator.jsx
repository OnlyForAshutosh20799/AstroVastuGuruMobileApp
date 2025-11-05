import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../Context/ThemContext";

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import KundliScreen from "../screens/Kundli/KundliScreen";
import HoroscopeScreen from "../screens/Horoscope/HoroscopeScreen";
import AstrologerScreen from "../screens/Astrologer/AstrologerScreen";
import BookPoojaScreen from "../screens/BookPooja/BookPoojaScreen";
import BlogScreen from "../screens/Blog/BlogScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark"; // ✅ use your context mode

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: isDark ? "#FFD700" : "#FF9933", // gold for dark, saffron for light
          tabBarInactiveTintColor: isDark ? "#AAAAAA" : "gray",
          tabBarStyle: {
            backgroundColor: isDark ? "#0D0D0D" : "#FFFFFF",
            borderTopWidth: 0,
            elevation: 5,
            height: 60,
            paddingBottom: 5,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home-outline";
                break;
              case "Kundli":
                iconName = "book-outline";
                break;
              case "Horoscope":
                iconName = "moon-outline";
                break;
              case "Astrologer":
                iconName = "star-outline";
                break;
              case "Book Pooja":
                iconName = "flame-outline";
                break;
              case "Blog":
                iconName = "newspaper-outline";
                break;
              default:
                iconName = "ellipse-outline";
                break;
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Kundli" component={KundliScreen} />
        <Tab.Screen name="Horoscope" component={HoroscopeScreen} />
        <Tab.Screen name="Astrologer" component={AstrologerScreen} />
        <Tab.Screen name="Book Pooja" component={BookPoojaScreen} />
        <Tab.Screen name="Blog" component={BlogScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
