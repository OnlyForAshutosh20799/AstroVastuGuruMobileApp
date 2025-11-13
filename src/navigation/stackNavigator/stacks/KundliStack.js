import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import KundliScreen from '../../../screens/Kundli/KundliScreen.jsx'
import KundliMainSubScreen from "../../../screens/Kundli/kundliSubScreens/KundliMainSubScreen";



const Stack = createNativeStackNavigator();

export default function KundliStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name='KundliScreen' component={KundliScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="KundliMainSubScreen" component={KundliMainSubScreen} options={{ headerShown: true }}/>
    </Stack.Navigator>
  );
}
