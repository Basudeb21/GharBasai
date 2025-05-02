import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const PayCardStyles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        backgroundColor: Colors.WHITE,
        borderTopRightRadius: scale(30),
        borderTopLeftRadius: scale(30),
        paddingHorizontal: moderateScale(20),
        paddingTop: verticalScale(20),
        paddingBottom: verticalScale(30),
        maxHeight: '80%',
    },
    cardTop: {
        width: "20%",
        height: verticalScale(4),
        backgroundColor: Colors.FADE,
        alignSelf: "center",
        marginBottom: verticalScale(20),
        borderRadius: scale(100)
    },
    head: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: Colors.BLACK,
        textAlign: 'center',
        marginBottom: verticalScale(10),
    },
    warning: {
        fontSize: moderateScale(12),
        color: Colors.RED,
        textAlign: 'center',
        marginBottom: verticalScale(20),
    },

    payAmountContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: verticalScale(10)
    },
    saveBox: {
        flexDirection: "row"

    },
    ammount: {
        fontSize: scale(16),
        fontWeight: "500"
    },
    payNow: {
        fontSize: scale(16)
    },
    saveTxt: {
        backgroundColor: Colors.THEME,
        padding: scale(4),
        color: Colors.WHITE,
        marginStart: moderateScale(10),
        fontSize: scale(10),
        borderRadius: scale(10)
    },

    payNowBtn: {
        backgroundColor: Colors.YELLOW,
        marginVertical: verticalScale(20),
        paddingVertical: verticalScale(9),
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        alignSelf: "center",
        borderRadius: scale(20)
    },
    payNowBtnTxt: {
        fontSize: scale(15),
        fontWeight: "400"
    },
    payHotelBtn: {
        paddingVertical: verticalScale(9),
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        alignSelf: "center",
        borderRadius: scale(20),
        borderWidth: scale(2)
    },
    payHotelBtnTxt: {
        fontSize: scale(15),
        fontWeight: "400"
    }



});

export default PayCardStyles