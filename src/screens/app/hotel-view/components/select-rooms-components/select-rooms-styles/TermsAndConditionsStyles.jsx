import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const TermsAndConditionsStyles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(28),
        marginBottom: verticalScale(20)
    },
    text: {
        fontSize: scale(12),
        color: Colors.FADE
    },
    blueTxt: {
        color: Colors.BLUE

    }
});

export default TermsAndConditionsStyles;