import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const OfferedCitiesStyles = StyleSheet.create({
    text: {
        fontSize: scale(17),
        marginTop: verticalScale(20),
        marginStart: (20),
        fontWeight: "600"
    }
});

export default OfferedCitiesStyles;