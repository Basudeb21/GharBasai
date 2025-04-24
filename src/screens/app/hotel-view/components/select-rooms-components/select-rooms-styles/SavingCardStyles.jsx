import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const SavingCardStyles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(20),
        backgroundColor: Colors.THEME_TRANSPARENT,
        flex: 1,
        flexDirection: "row",
        borderColor: Colors.THEME,
        borderWidth: scale(1),
        paddingVertical: scale(5),
        borderRadius: scale(8),
        marginTop: verticalScale(10)
    },
    left: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    right: {
        flex: 8
    },
    mainTxt: {
        fontWeight: "500",
        fontSize: scale(12),
        color: Colors.DEACTIVE
    },
    subContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: verticalScale(8)

    },
    subTxt: {
        fontSize: scale(10),
        color: Colors.DEACTIVE,
        marginEnd: moderateScale(10),
    }

});

export default SavingCardStyles;