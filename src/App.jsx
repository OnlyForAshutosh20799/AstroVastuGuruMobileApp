import React from 'react';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { ThemeProvider } from './Context/ThemContext';

export default function App() {
  return (
    <ThemeProvider>
      <BottomTabNavigator />
    </ThemeProvider>
  );
}
