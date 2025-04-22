import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";


export default function Routes() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
}