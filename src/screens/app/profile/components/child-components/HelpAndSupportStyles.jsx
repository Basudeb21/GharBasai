import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";


const HelpAndSupportStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        paddingStart: moderateScale(15),
        marginVertical: verticalScale(10),
        paddingBottom: verticalScale(10),
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEACTIVE,
    },
    cardText: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontSize: scale(18),
        marginStart: moderateScale(20),
        fontWeight: "400",
    },
    button: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(20),
        borderWidth: 1,
        borderColor: Colors.DISABLED_NAVIGATION_COLOR,
        backgroundColor: 'transparent',
        borderRadius: scale(100),
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(20)

    },
    buttonText: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontSize: scale(16),
        fontWeight: '500',
        textAlign: 'center',
    },
    copyright: {
        color: Colors.FADE
    },
    bottom: {
        justifyContent: "center",
        alignItems: "center"
    },
    screen: {
        height: "90%",
        justifyContent: "space-between"
    }


})

export default HelpAndSupportStyles