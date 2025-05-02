import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const BookingGenerateStyles = StyleSheet.create({
    bgImg: {
        width: "100%",
        height: verticalScale(200)
    },
    headerContainer: {
        position: 'absolute',
        top: moderateVerticalScale(10),
        left: 0,
        right: 0,
    },
    backBtn: {
        marginStart: moderateScale(20),
    },
    confirmedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmedBtn: {
        color: Colors.WHITE,
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: Colors.THEME,
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(7),
        borderRadius: scale(6)
    }


});

export default BookingGenerateStyles