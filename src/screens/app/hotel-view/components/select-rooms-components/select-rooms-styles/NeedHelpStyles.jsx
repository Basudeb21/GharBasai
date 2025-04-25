import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const NeedHelpStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginVertical: verticalScale(20),
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(10),
        elevation: scale(2),
        borderRadius: scale(12),
        justifyContent: "space-between",
        flex: 1,
        flexDirection: "row"
    },
    left: {
        flex: 8,
        justifyContent: "center",
    },
    right: {
        flex: 2,
        justifyContent: "center",

    },
    headTxt: {
        fontSize: scale(13),
        fontWeight: "700"
    },
    subTxt: {
        color: Colors.FADE,
        fontSize: scale(10)
    },
    logoBg: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(8),
        borderRadius: scale(100)
    }
});

export default NeedHelpStyles;