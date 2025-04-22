import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Login,
    Otp
} from "../screens";
import NavigationString from "../constants/NavigationString";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationString.LOGIN} component={Login} />
            <Stack.Screen name={NavigationString.OTP} component={Otp} />
        </Stack.Navigator>
    )
}

