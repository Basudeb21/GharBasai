import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale, ms } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const EmptyPageStyles = StyleSheet.create({

    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    msg: {
        color: Colors.FADE
    },
    btn: {
        backgroundColor: Colors.YELLOW,
        width: "50%",
        alignItems: "center",
        paddingVertical: verticalScale(8),
        marginTop: verticalScale(20),
    },
    btnTxt: {
        fontSize: scale(16),
        fontWeight: "400"

    }

})

export default EmptyPageStyles