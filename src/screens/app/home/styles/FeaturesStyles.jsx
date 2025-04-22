import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";


const FeaturesStyles = StyleSheet.create({

    featuresRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    featuresCard: {
        backgroundColor: Colors.THEME,
        marginHorizontal: moderateScale(25),
        marginVertical: verticalScale(10),
        borderRadius: 10,
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(20)
    },
    logoContainer: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        padding: scale(10),
        borderRadius: scale(100),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(5),

    },
    container: {
        width: '25%',
        marginVertical: verticalScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    featuresTxt: {
        color: Colors.WHITE,
        textAlign: 'center',
        marginTop: verticalScale(5),
    },
    txtOne: {
        color: Colors.WHITE,
        fontSize: scale(20),
        fontWeight: "700"
    },

    hassleFree: {
        color: Colors.DISABLED_NAVIGATION_COLOR
    },
    txtYellow: {
        color: Colors.YELLOW
    }


});

export default FeaturesStyles;