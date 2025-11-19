import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../Context/ThemContext";

// Screens
import HomeStack from "./stackNavigator/stacks/HomeStack";
import HoroscopeScreen from "../screens/Horoscope/HoroscopeScreen";
import BookPoojaStack from "./stackNavigator/stacks/BookPoojaStack";
import KundliStack from "./stackNavigator/stacks/KundliStack";
import AstrologerStack from "./stackNavigator/stacks/AstrologerStack";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: isDark ? "#FFD700" : "#FF9933",
          tabBarInactiveTintColor: isDark ? "#AAAAAA" : "gray",
          tabBarStyle: {
            backgroundColor: isDark ? "#0D0D0D" : "#FFFFFF",
            borderTopWidth: 0,
            elevation: 5,
            height: 60,
            paddingBottom: 5,
          },
          tabBarIcon: ({ color }) => {
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
              default:
                iconName = "ellipse-outline";
                break;
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
        })}
      >
         <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Kundli" component={KundliStack} />
        <Tab.Screen name="Book Pooja" component={BookPoojaStack} />
       
        <Tab.Screen name="Horoscope" component={HoroscopeScreen} />

        {/* ⭐ IMPORTANT — Tab hide on subscreens */}
        <Tab.Screen
          name="Astrologer"
          component={AstrologerStack}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "Astrologer Screen";

            const hideTabsOn = [
              "Astrologer Profile",
              "Call with Astrologer",
              "Chat with Astrologer",
              "Astrologer Registration",
              "Login Form"
            ];

            return {
              tabBarStyle: {
                backgroundColor: isDark ? "#0D0D0D" : "#FFFFFF",
                height: 60,
                display: hideTabsOn.includes(routeName) ? "none" : "flex",
              },
            };
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
