import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AddCard from './components/AddCard';
import LoginInput from './components/LoginInput';
import GetOtpButton from './components/GetOtpButton';
import TermsAndConditions from './components/TermsAndConditions';
import String from '../../../constants/String';
import OTPButtonStyles from './components/styles/OTPButtonStyles';
import NavigationString from '../../../constants/NavigationString';
import { useNavigation } from '@react-navigation/native';
import LoginStyles from './components/styles/LoginStyles';

const Login = ({ onSkipLogin }) => {
    const navigation = useNavigation();

    return (
        <View style={LoginStyles.container}>
            <View>
                <AddCard />
                <View style={LoginStyles.bonusContainer}>
                    <Text style={TextStyles.signUpBonusText}>{String.BONUS_TXT}</Text>
                    <TouchableOpacity
                        style={LoginStyles.btn}
                        onPress={() => {
                            if (onSkipLogin) {
                                onSkipLogin();
                            }
                            navigation.navigate(NavigationString.MAIN_STACK);
                        }}
                    >
                        <Text style={LoginStyles.btnTxt}>SKIP</Text>
                    </TouchableOpacity>
                </View>
                <LoginInput placeholder="Enter your phone number" />
                <Text style={TextStyles.refferalCodeText}>{String.REFFERAL_TXT}</Text>
                <GetOtpButton />
            </View>

            <TermsAndConditions />
        </View>
    );
};

export default Login;
