import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const UpcomingCardStyles = StyleSheet.create({
    container: {
        width: "95%",
        marginTop: verticalScale(20),
        elevation: scale(2),
        backgroundColor: Colors.WHITE,
        borderRadius: scale(12),
        justifyContent: "space-around",
        paddingVertical: verticalScale(10)
    },
    calander: {
        backgroundColor: Colors.THEME,
        marginVertical: verticalScale(10),
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(5),
        borderRadius: scale(8),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: verticalScale(10)
    },
    month: {
        color: Colors.WHITE,
        fontSize: scale(12),

    },
    date: {
        color: Colors.WHITE,
        fontSize: scale(18),
        fontWeight: "600"

    },
    year: {
        color: Colors.WHITE,
        fontSize: scale(12),

    },
    detailsContainer: {

    },
    hotelName: {
        fontSize: scale(14),
        fontWeight: "600",
        marginTop: verticalScale(5)
    },
    roomDetails: {
        color: Colors.FADE
    },
    confirmedTxt: {
        color: Colors.THEME,
        fontWeight: "600"
    },
    directionTxt: {
        color: Colors.BLUE,
        marginStart: moderateScale(5)
    },
    rowOne: {
        flexDirection: "row",
    },
    rowTwo: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    directionContainer: {
        flexDirection: "row"
    }

})

export default UpcomingCardStyles