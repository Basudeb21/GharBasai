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
        backgroundColor: Colors.WHITE,
        paddingHorizontal: scale(20),
        paddingVertical: scale(5),
        borderRadius: scale(20),
        justifyContent: "center",
        alignItems: "center"
    },
    button2: {
        backgroundColor: Colors.BLUE,
    },
    btnTxt: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT
    },
    btnSubTxt: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontSize: scale(10)
    },
    btnTxt2: {
        color: Colors.WHITE
    },
    btnSubTxt2: {
        color: Colors.WHITE,
        fontSize: scale(10)
    }

});

export default BottomBarStyles;
