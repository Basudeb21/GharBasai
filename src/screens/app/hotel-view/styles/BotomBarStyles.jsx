import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const BottomBarStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: scale(20)
    },
    button: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        paddingHorizontal: scale(20),
        paddingVertical: scale(5),
        borderRadius: scale(20)
    },
    button2: {

    },
    btnTxt: {
        color: Colors.WHITE
    },
    btnSubTxt: {

    }
});

export default BottomBarStyles;
