import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const BtnStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: Colors.THEME,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
        borderRadius: scale(12),
        marginTop: verticalScale(10)
    },
    content: {
        color: Colors.WHITE,
        marginStart: moderateScale(10),
        fontSize: scale(16),
        fontWeight: "500"
    },
    uncheckedContainer: {
        flexDirection: "row",
        backgroundColor: Colors.WHITE,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
        borderRadius: scale(12),
        marginTop: verticalScale(10),
        borderColor: Colors.THEME,
        borderWidth: scale(2)
    },
    uncheckedContent: {
        color: Colors.THEME,
        marginStart: moderateScale(10),
        fontSize: scale(16),
        fontWeight: "500"
    },

});

export default BtnStyles;