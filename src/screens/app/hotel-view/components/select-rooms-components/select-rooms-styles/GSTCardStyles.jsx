import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const GSTCardStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        elevation: scale(2),
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
        borderRadius: scale(12),
        marginBottom: verticalScale(10)
    },
    headTxt: {
        color: Colors.FADE,
        fontWeight: "500",
        fontSize: scale(10)
    },
    priceContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    price: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontWeight: "600"
    },
    iconBG: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        padding: scale(8),
        borderRadius: scale(100)
    },
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    footerTxt: {
        marginStart: moderateScale(6),
        color: Colors.THEME,
        fontSize: scale(12)
    }
});

export default GSTCardStyles;