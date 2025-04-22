import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";

const HotelListStyles = StyleSheet.create({
    foundContainer: {
        paddingHorizontal: moderateScale(20),
        paddingTop: verticalScale(10)
    },

    foundTxt: {
        fontSize: scale(16),
        fontWeight: "400"
    },
    promoCodeTxt: {
        fontSize: scale(8),
        color: Colors.DISABLED_NAVIGATION_COLOR
    },

    hotelimage: {
        marginTop: verticalScale(10),
        width: moderateScale(250),
        height: verticalScale(140),
        marginHorizontal: 10,
        borderRadius: 10,
    },
    hotelName: {
        marginHorizontal: moderateScale(20),
        fontSize: scale(14),
        fontWeight: "500"
    },
    locationContainer: {
        flex: 1,
        flexDirection: "row",
        marginStart: moderateScale(16)
    },
    locationName: {
        fontSize: scale(12),
        color: Colors.THEME_TRANSPARENT,
        marginStart: moderateScale(5)
    },
    ratingContainer: {
        marginHorizontal: verticalScale(20),
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    guestTxt: {
        color: Colors.DARK_GRAY,
        fontSize: scale(10),
        marginTop: scale(7),
    },
    facilityContainer: {
        marginTop: verticalScale(10),
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: moderateScale(18)

    },
    allFacelities: {
    },
    facelitiesTxt: {
        color: Colors.THEME_TRANSPARENT,
        fontSize: scale(10),
        fontWeight: "400",
        marginStart: scale(6)
    },
    sigleFacility: {
        flexDirection: "row",
        marginTop: verticalScale(2)
    },
    rentContainer: {

    },
    rent: {
        fontWeight: "700"
    },
    gstRent: {
        color: Colors.DARK_GRAY,
        fontSize: scale(8)
    },
    hr: {
        width: "80%",
        height: scale(2),
        backgroundColor: Colors.DEACTIVE,
        marginTop: verticalScale(12),
        marginStart: "10%",
        borderRadius: scale(10)
    }
});

export default HotelListStyles;