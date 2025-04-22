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
        borderRadius: scale(20),
        justifyContent: "center",
        alignItems: "center"
    },
    button2: {
        backgroundColor: Colors.YELLOW,
    },
    btnTxt: {
        color: Colors.WHITE
    },
    btnSubTxt: {
        color: Colors.WHITE,
        fontSize: scale(10)
    }
});

export default BottomBarStyles;
