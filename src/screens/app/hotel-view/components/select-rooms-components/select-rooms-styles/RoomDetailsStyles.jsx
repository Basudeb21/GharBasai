import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const RoomDetailsStyle = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(20)
    },
    headContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    headTxt: {
        fontSize: scale(20),
        fontWeight: "600"
    },
    guestNumber: {
        fontSize: scale(12),
        color: Colors.DISABLED_NAVIGATION_COLOR
    },
    hurryMsg: {
        color: Colors.RED
    },
    bodyContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: verticalScale(20)
    },
    roomImg: {
        width: "50%",
        height: verticalScale(100),
        borderRadius: scale(10)
    },
    facilityContainer: {
        width: "50%",
        paddingStart: moderateScale(20),

    },
    singleFacility: {
        flex: 1,
        flexDirection: "row",
    },
    facilityTxt: {
        marginLeft: moderateScale(10)
    }
});

export default RoomDetailsStyle;