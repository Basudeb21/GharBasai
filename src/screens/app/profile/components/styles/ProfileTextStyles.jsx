import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";


const ProfileTextStyles = StyleSheet.create({
    textContainer: {
        margin: 20
    },
    membershipText: {
        color: Colors.WHITE,
    },
    colorText: {
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: scale(20)
    },
});

export default ProfileTextStyles;