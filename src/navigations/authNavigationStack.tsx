import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { defaultFont } from 'src/resources/fonts';
import Login from 'src/screens/login';

const Stack = createNativeStackNavigator();

const AuthNavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: { ...defaultFont },
      }}
    >
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigationStack;
