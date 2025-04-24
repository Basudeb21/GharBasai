import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const SavingCornerCardStyles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(20),
        marginVertical: verticalScale(10),
        paddingHorizontal: moderateVerticalScale(10),
        paddingVertical: verticalScale(10),
        backgroundColor: Colors.WHITE,
        borderRadius: scale(12),
        elevation: scale(2),
    },
    mainTxt: {
        fontWeight: "600"
    },
    savingDataContainer: {
        marginTop: verticalScale(20)

    },
    dataContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: verticalScale(6)
    },
    savingData: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontSize: scale(10),
        marginStart: scale(10)
    },
    totalSaveContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: verticalScale(8),

    },
    totalSaveTxt: {
        marginStart: moderateScale(10),
        color: Colors.THEME,
        fontSize: scale(12)
    }

});

export default SavingCornerCardStyles;