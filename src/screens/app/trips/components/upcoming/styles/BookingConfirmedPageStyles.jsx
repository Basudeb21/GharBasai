import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale, ms } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const BookingConfirmedPageStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    confirmImg: {
        width: "100%",
        height: verticalScale(180),
        justifyContent: "center",
        alignItems: "center"
    },
    confirmedMsg: {
        color: Colors.WHITE,
        fontSize: scale(24)
    },
    bookingIdTxt: {
        color: Colors.THEME_TRANSPARENT,
        backgroundColor: Colors.WHITE,
        padding: scale(10),
        borderRadius: scale(100),
        marginTop: verticalScale(10)
    },
    bookingInfoCard: {
        elevation: scale(2),
        borderRadius: scale(8),
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(-28),
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(20),
        marginBottom: verticalScale(20)
    },
    iconDataContainer: {
        flexDirection: "row"
    },
    bookingDate: {
        marginStart: moderateScale(10),
        fontWeight: "600",
        marginBottom: verticalScale(10)
    },
    hotelName: {
        color: Colors.FADE,
        marginStart: moderateScale(10),
        fontWeight: "500"
    },
    bookingDetails: {
        color: Colors.FADE,
        marginStart: moderateScale(20),
        fontWeight: "400"
    },
    hr: {
        marginVertical: verticalScale(20),
        backgroundColor: Colors.DEACTIVE,
        height: verticalScale(2),
        borderRadius: scale(100),
    },
    paymentContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    paymentTxt: {
        fontSize: scale(12),
        fontWeight: "600"
    },
    ammount: {
        fontSize: scale(18),
        fontWeight: "600"
    },
    payMoneyContainer: {
        flexDirection: "row",
        marginVertical: verticalScale(30),
        marginHorizontal: moderateScale(20)
    },
    payTxtContainer: {
        flex: 1,
    },
    payAmmount: {
        fontWeight: "600",
        fontSize: scale(16),

    },

    payDes: {
        fontSize: scale(11),
        fontWeight: "400"

    },
    payBtn: {
        backgroundColor: Colors.YELLOW,
        alignSelf: "flex-start",
        padding: scale(10),
        borderRadius: scale(25)
    },
    payBtnTxt: {
        fontSize: scale(14),
        fontWeight: "600"
    },

    refferAndWinCard: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        marginBottom: verticalScale(20),
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
        borderRadius: scale(16),
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"

    },
    refferTxt: {
        fontWeight: "600",
        color: Colors.WHITE,
        fontSize: scale(14)
    },
    knowMoreContainer: {
        flexDirection: "row",
        marginTop: verticalScale(10)

    },
    knowMoreTxt: {
        marginEnd: moderateScale(10),
        color: Colors.THEME,
    },
    tripImage: {
        height: verticalScale(50),
        width: moderateScale(50),
        borderRadius: scale(100)
    },
    left: {

    },
    right: {}



})

export default BookingConfirmedPageStyles