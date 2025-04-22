import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";

export default TextStyles = StyleSheet.create({
    credentialText: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        marginHorizontal: moderateScale(25),
        fontSize: scale(14)
    },
    signUpBonusText: {
        fontSize: scale(24),
        marginStart: moderateScale(20),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(20)
    },
    refferalCodeText: {
        fontSize: scale(15),
        marginStart: moderateScale(20),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(20),
        color: Colors.THEME
    },
    getOtp: {
        color: Colors.WHITE,
        fontSize: scale(18),
        fontWeight: "bold"
    },
    outerterms: {
        marginStart: moderateScale(20),
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        marginBottom: verticalScale(40)
    },
    innerTerms: {
        color: Colors.RED
    }
})