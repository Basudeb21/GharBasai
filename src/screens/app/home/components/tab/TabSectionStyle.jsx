import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";

const TabSectionStyles = StyleSheet.create({
    button: {
        backgroundColor: Colors.THEME,
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(20),
        borderRadius: scale(30),
        marginHorizontal: moderateScale(5),
    },
    buttonFont: {
        color: Colors.WHITE,
        fontWeight: 'bold'
    }

});

export default TabSectionStyles;