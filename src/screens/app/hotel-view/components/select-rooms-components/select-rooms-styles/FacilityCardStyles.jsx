import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const FacilityCardStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        elevation: scale(2),
        borderRadius: scale(12),
        marginVertical: verticalScale(10),
        marginHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    facilityContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start"
    },
    facilityName: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontSize: scale(10)
    },
    counter: {
        color: Colors.THEME
    },
    counterContainer: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        borderRadius: scale(20),
        alignSelf: "flex-start",
        padding: scale(6),
        paddingVertical: verticalScale(8)
    }

});

export default FacilityCardStyles;