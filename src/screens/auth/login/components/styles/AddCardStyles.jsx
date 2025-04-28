import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";


export default AddCardStyles = StyleSheet.create({
    mainCard: {
        width: "100%",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        backgroundColor: Colors.LOGIN_IMG_CONTAINER,
        height: verticalScale(140),
        marginBottom: verticalScale(10),
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        height: verticalScale(220),
        width: moderateScale(220)
    }

})