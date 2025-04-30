import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale, ms } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const BottomBarStyles = StyleSheet.create({

    container: {
        backgroundColor: Colors.WHITE,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: scale(10)
    },
    btn: {
        backgroundColor: Colors.WHITE,
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(20),
        borderRadius: scale(20),
        borderWidth: scale(2),
        borderColor: Colors.THEME,
        marginVertical: verticalScale(8)
    },
    btnTxt: {
        color: Colors.THEME,
        fontWeight: "600"
    }

})

export default BottomBarStyles