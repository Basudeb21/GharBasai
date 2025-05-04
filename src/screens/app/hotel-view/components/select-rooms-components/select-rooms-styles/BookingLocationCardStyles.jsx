import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const BookingLocationCardStyles = StyleSheet.create({

    container: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: Colors.WHITE,
        padding: scale(15),
        borderRadius: scale(12),
        elevation: scale(2),
        marginTop: scale(-45)
    },
    hotelName: {
        fontWeight: "500",
        alignSelf: "center"
    },
    hotelLocation: {
        marginTop: verticalScale(20),
        alignSelf: "center",
        color: Colors.FADE,
        fontSize: scale(12)

    },
    bookingID: {
        marginTop: verticalScale(20),
        alignSelf: "center",
        fontSize: scale(12),
        fontWeight: "500",

    },
    btnContainer: {
        flexDirection: "row",
        marginTop: verticalScale(20)

    },

    btn: {
        borderWidth: scale(1),
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.FADE,
        paddingVertical: verticalScale(8),
        alignSelf: "center"
    },
    cancelBtn: {
        color: Colors.RED,
        fontSize: scale(12)
    },
    directionBtn: {
        color: Colors.BLUE,
        fontSize: scale(12)
    }

});

export default BookingLocationCardStyles;