import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HoroscopeScreen from "../../../screens/Horoscope/HoroscopeScreen.jsx";




const Stack = createNativeStackNavigator();

export default function HoroscopeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name='HoroscopeScreen' component={HoroscopeScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
