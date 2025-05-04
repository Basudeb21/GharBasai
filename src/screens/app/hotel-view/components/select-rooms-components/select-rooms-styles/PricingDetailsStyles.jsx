import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const PricingDetailsStyles = StyleSheet.create({

    head: {
        fontWeight: "500",
        marginStart: moderateScale(30),
        marginTop: verticalScale(30),
        marginBottom: verticalScale(10)
    },
    container: {
        backgroundColor: Colors.WHITE,
        paddingVertical: verticalScale(20)
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(30)
    },
    lineOneContent: {
        fontSize: scale(11),
        color: Colors.FADE,
    },

    lineTwoContent: {
        fontSize: scale(11),
        color: Colors.THEME,
    },

    lineThreeContent: {
        fontSize: scale(11),
        // color: Colors.FADE,
    },

    lineFourContent: {
        fontSize: scale(11),
        color: Colors.FADE,
    },

    lineFiveContent: {
        fontSize: scale(11),
        fontWeight: "600"
    },
    btn: {
        backgroundColor: Colors.YELLOW,
        width: "70%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: verticalScale(20),
        paddingVertical: verticalScale(14),
    },
    btnTxt: {
        fontSize: scale(16),
        fontWeight: "600"
    }
});

export default PricingDetailsStyles;