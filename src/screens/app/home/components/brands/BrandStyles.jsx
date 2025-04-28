import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";

const BrandStyles = StyleSheet.create({
    container: {
        paddingTop: verticalScale(20),
        paddingStart: moderateScale(20),
    },
    headText: {
        fontSize: scale(15),
        fontWeight: "600"
    },
    btnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: verticalScale(10)
    },
    btnActive: {
        backgroundColor: Colors.THEME,
        alignSelf: "flex-start",
        paddingVertical: verticalScale(8),
        paddingHorizontal: moderateScale(20),
        borderRadius: scale(100)
    },
    brandDetails: {
        marginVertical: verticalScale(20),
        marginHorizontal: moderateScale(10)
    },
    btnTxt: {
        color: Colors.WHITE
    },
    btnDeactive: {
        backgroundColor: Colors.BTN_DEACTIVE,
        alignSelf: "flex-start",
        paddingVertical: verticalScale(8),
        paddingHorizontal: moderateScale(20),
        borderRadius: scale(100)
    },
    imageAd: {
        width: moderateScale(270),
        height: verticalScale(150),
        borderRadius: scale(20)

    },
    type: {
        fontSize: scale(14),
        fontWeight: "400",
        color: Colors.FADE
    },
    typedesc: {
        fontSize: scale(16),
        fontWeight: "500"
    },
    features: {
        fontSize: scale(14),
        color: Colors.DISABLED_NAVIGATION_COLOR,
        marginStart: scale(6)
    },
    brandTxtContainer: {
        marginTop: verticalScale(5)
    },
    featuresContainer: {
        marginTop: verticalScale(14)
    },
    singleFeatures: {
        flexDirection: "row",
        alignItems: "center"
    }

})

export default BrandStyles;
