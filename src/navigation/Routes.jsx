import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import NavigationString from '../constants/NavigationString';
import { Login } from '../screens';

const Stack = createNativeStackNavigator();

export default function Routes() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NavigationString.LOGIN}>
                    {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>

                <Stack.Screen name={NavigationString.MAIN_STACK} component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
