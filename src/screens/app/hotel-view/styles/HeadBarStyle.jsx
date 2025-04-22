import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const HeadBarStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: verticalScale(14)
    },
    guestContainer: {
        flexDirection: "row",
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "flex-start",
        padding: scale(10),
        borderRadius: scale(20)
    },
    itemContainer: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "flex-start",
        padding: scale(10),
        borderRadius: scale(15)
    },
    guestTxt: {
        color: Colors.WHITE,
        marginStart: moderateScale(15),
        fontWeight: "500",
        fontSize: scale(16)
    },
    items: {
        color: Colors.WHITE
    },
    noBG: {
        backgroundColor: Colors.THEME
    }

});

export default HeadBarStyles;
