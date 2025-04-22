import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../../constants/Colors';


const HotelListsStyles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(20),
        marginStart: moderateScale(20)
    },
    mainText: {
        fontSize: scale(16),
        fontWeight: "600"
    },
    numberText: {
        color: Colors.THEME
    },
    listContainer: {
        marginTop: verticalScale(20),
        flex: 1
    },
    hotelContainer: {
        marginEnd: moderateScale(20)
    },
    listImages: {
        width: moderateScale(220),
        height: verticalScale(170),
        borderRadius: scale(20),
    },
    hotelName: {
        fontSize: scale(16),
        fontWeight: "500"
    },
    hotelInfo: {
        color: Colors.FADE,
        fontSize: scale(12)
    },
    ratingcontainer: {
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center"
    },
    ratingTxt: {
        backgroundColor: Colors.RATINGS_BG,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(8),
        paddingVertical: verticalScale(3),
        borderRadius: scale(100),
        color: Colors.WHITE,
        fontSize: scale(12),
        marginTop: verticalScale(5)
    },
    rateCount: {
        marginStart: moderateScale(10),
        color: Colors.FADE,
        fontSize: scale(10),
        textAlign: "center"

    },
    destinationImageScroll: {
        marginVertical: verticalScale(10),
        flexDirection: "row",
        width: "100%"
    }
})

export default HotelListsStyles

