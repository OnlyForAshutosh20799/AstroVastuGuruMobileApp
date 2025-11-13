import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookPoojaScreen from "../../../screens/BookPooja/BookPoojaScreen.jsx";
import BookPujaMainSubScreen from "../../../screens/BookPooja/BookPujaSubScreen/BookPujaMainSubScreen.jsx";

const Stack = createNativeStackNavigator();

export default function BookPoojaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // default for all screens
      }}
    >
      <Stack.Screen
        name="BookPoojaMain"
        component={BookPoojaScreen}
        options={{ headerShown: false }} // only this one shows header
      />
      <Stack.Screen
        name="Book Puja"
        component={BookPujaMainSubScreen}
        options={{ headerShown: true }} // hide header here
      />
    </Stack.Navigator>
  );
}

