import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";

export default OTPButtonStyles = StyleSheet.create({
    buttonStyle: {
        marginHorizontal: moderateScale(20),
        backgroundColor: Colors.THEME,
        paddingVertical: verticalScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})