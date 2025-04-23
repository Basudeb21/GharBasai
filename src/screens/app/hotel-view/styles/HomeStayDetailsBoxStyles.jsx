import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const HomeStayDetailsBoxStyles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(8),
        height: verticalScale(150),
        padding: scale(10),
        borderRadius: scale(10),
        elevation: 2,
        backgroundColor: Colors.WHITE
    },
    singleDetails: {
        flexDirection: "row",
        marginTop: verticalScale(5),
        alignItems: "center"
    },
    mainTxt: {
        fontSize: scale(18),
        fontWeight: "600",
        marginTop: scale(6),
        marginStart: moderateScale(10)
    },
    detailsContainer: {
        flex: 1,
        marginTop: scale(8)
    },
    detailsOne: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontSize: scale(12),
        marginStart: scale(5),
        marginEnd: scale(5),
    },
    facelitiesContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    facelities: {
        fontSize: scale(12),
        color: Colors.THEME,
        marginLeft: scale(5)
    },
    singleFacility: {
        flexDirection: "row",
    }
});

export default HomeStayDetailsBoxStyles;