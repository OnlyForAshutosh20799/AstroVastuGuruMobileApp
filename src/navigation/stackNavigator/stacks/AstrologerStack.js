import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AstrologerScreen from "../../../screens/Astrologer/AstrologerScreen";
import AstrologerList from "../../../screens/Astrologer/AstrologerSubPages/AstrologerProfile/AstrologerList";




const Stack = createNativeStackNavigator();

export default function AstrologerStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Astrologer Screen' component={AstrologerScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Astrologer List" component={AstrologerList} options={{ headerShown: true }}/>
    </Stack.Navigator>
  );
}
