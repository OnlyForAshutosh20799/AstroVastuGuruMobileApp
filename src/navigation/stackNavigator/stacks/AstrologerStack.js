import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AstrologerScreen from "../../../screens/Astrologer/AstrologerScreen";
import AstrologerProfileList from "../../../screens/Astrologer/AstrologerSubPages/AstrologerProfileList";
import CallWithAstrologer from "../../../screens/Astrologer/AstrologerSubPages/CallWithAstrologer";
import ChatWithAstrologer from "../../../screens/Astrologer/AstrologerSubPages/ChatWithAstrologer";
import AstrologerRegistration from "../../../screens/Astrologer/AstrologerSubPages/AstrologerRegistration"
import LoginForm from "../../../screens/Astrologer/AstrologerSubPages/LoginForm";




const Stack = createNativeStackNavigator();

export default function AstrologerStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Astrologer Screen' component={AstrologerScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Astrologer Profile" component={AstrologerProfileList} options={{ headerShown: true }}/>
      <Stack.Screen name="Call with Astrologer" component={CallWithAstrologer} options={{headerShown: true}}/>
      <Stack.Screen name="Chat with Astrologer" component={ChatWithAstrologer} options={{headerShown: true}}/>
      <Stack.Screen name="Astrologer Registration" component={AstrologerRegistration} options={{headerShown: true}}/>
      <Stack.Screen name="Login Form" component={LoginForm} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
