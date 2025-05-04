import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const BookingStyles = StyleSheet.create({

    container: {
        marginTop: verticalScale(30),
    },
    headTxt: {
        fontWeight: "500",
        marginStart: moderateScale(30),
        marginBottom: verticalScale(10)
    },
    card: {
        backgroundColor: Colors.WHITE,
        padding: scale(10),
    },
    subCard: {
        flexDirection: "row",
        justifyContent: "space-around"

    },
    check: {
        fontSize: scale(12)
    },
    date: {
        fontSize: scale(15),
        fontWeight: "400",
        color: Colors.FADE
    }
    ,
    time: {
        fontSize: scale(10),
        color: Colors.FADE
    },

    hr: {
        width: "90%",
        height: verticalScale(1),
        backgroundColor: Colors.FADE,
        alignSelf: "center",
        marginVertical: verticalScale(15)
    },

    details: {
        marginStart: moderateScale(20),
        color: Colors.FADE,
        fontSize: scale(12)
    },



});

export default BookingStyles;