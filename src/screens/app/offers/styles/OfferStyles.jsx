import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const OfferStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 10
    },
    cardParent: {
        marginBottom: 20
    },
    dealTxt: {
        fontSize: scale(24),
        fontWeight: "400",
        textAlign: "left",
        width: "100%",
        marginStart: moderateScale(80),
        marginBottom: verticalScale(10)
    }
});

export default OfferStyles;