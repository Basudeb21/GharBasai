import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const DestinitionStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    imageWrapper: {
        width: "45%",
        height: verticalScale(120),
        marginVertical: verticalScale(10),
        borderRadius: scale(15),
    },
    image: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        padding: scale(8)
    },
    text: {
        fontSize: scale(14),
        fontWeight: "600",
        color: "white",
        marginBottom: verticalScale(20)
    }
});

export default DestinitionStyles;