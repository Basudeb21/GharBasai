import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserForm } from "../screens/app";
import NavigationString from "../constants/NavigationString";
import HelpAndSupport from "../screens/app/profile/components/child-components/styles/HelpAndSupport";


const Stack = createNativeStackNavigator();

export default function ProfileStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationString.USER_FORM} component={UserForm} />
            <Stack.Screen name={NavigationString.HELP_AND_SUPPORT} component={HelpAndSupport} />


        </Stack.Navigator>
    )
}

