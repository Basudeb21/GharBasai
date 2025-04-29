import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const RatingBoxStyles = StyleSheet.create({
    container: {
        borderRadius: scale(8),
        marginTop: verticalScale(10),
        marginHorizontal: moderateScale(20),
        marginBottom: verticalScale(10),
        padding: 10,
        elevation: 2,
        backgroundColor: Colors.WHITE,
        flexDirection: "row",
        alignItems: "center",

    },
    ratingContainer: {
        backgroundColor: Colors.THEME,
        padding: scale(8),
        borderRadius: scale(8),
        paddingVertical: scale(12),
        alignSelf: "flex-start"
    },
    ratingTxt: {
        color: Colors.WHITE,
        fontSize: scale(16),
        fontWeight: "500"
    },
    ratingGradeContainer: {
        marginStart: moderateScale(20)
    },
    ratingGrade: {
        fontWeight: "600"
    },
    ratingNumber: {
        fontSize: scale(10),
        color: Colors.DISABLED_NAVIGATION_COLOR
    },
    back: {
        flex: 1,
    },
    rateContainer: {
        flex: 9,
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: "flex-start"
    }
});

export default RatingBoxStyles;