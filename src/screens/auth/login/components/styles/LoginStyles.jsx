import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";


export default LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    bonusContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    btn: {
        borderWidth: 1,
        alignSelf: "flex-start",
        padding: 10,
        borderRadius: 12,
        marginTop: 5,
        borderColor: Colors.FADE
    },
    btnTxt: {
        color: Colors.FADE
    }

})