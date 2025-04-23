import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const SelectRoomsStyle = StyleSheet.create({
    container: {
        marginTop: scale(20)
    },
    mainText: {
        fontSize: scale(18),
        fontWeight: "700",
        marginStart: scale(20)
    }
});

export default SelectRoomsStyle;