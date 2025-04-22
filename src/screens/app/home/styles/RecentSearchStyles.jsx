import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../../constants/Colors';
Colors

const RecentSearchStyle = StyleSheet.create({
    container: {
        marginTop: verticalScale(20),
        marginHorizontal: moderateScale(20)
    },
    mainText: {
        fontSize: scale(14),
        fontWeight: "500"
    },
    card: {
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        width: "80%"
    },
    locationContainer: {
        backgroundColor: Colors.LOCATION_CONTAINER,
        marginEnd: moderateScale(30),
        padding: scale(10),
        borderRadius: scale(8)

    },
    locationText: {
        fontSize: scale(16),
        fontWeight: "600"
    },
    bookingDetails: {
        fontSize: scale(10),
        fontWeight: "400",
        color: Colors.DISABLED_TXT
    }

});

export default RecentSearchStyle;
