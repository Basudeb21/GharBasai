import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserForm } from "../screens/app";
import NavigationString from "../constants/NavigationString";


const Stack = createNativeStackNavigator();

export default function ProfileStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationString.USER_FORM} component={UserForm} />

        </Stack.Navigator>
    )
}

