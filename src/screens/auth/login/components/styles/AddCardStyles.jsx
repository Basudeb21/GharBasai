import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";


export default AddCardStyles = StyleSheet.create({
    mainCard: {
        width: "100%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: Colors.THEME,
        height: verticalScale(140),
        marginBottom: verticalScale(10),
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        height: verticalScale(180),
        width: moderateScale(180)
    }

})