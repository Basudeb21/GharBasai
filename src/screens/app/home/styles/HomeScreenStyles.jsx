import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
    },
    searchArea: {
        backgroundColor: "transparent",
        height: verticalScale(590),
        marginTop: -1,
        marginBottom: -1,
    },
    headerLogoContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(25)
    },

    logo: {
        fontSize: scale(24),
        color: Colors.WHITE,
        flex: 6,
    },

    supportArea: {
        flexDirection: "row",
        flex: 4,
        justifyContent: "center"
    },

    wallet: {
        backgroundColor: Colors.WHITE,
        padding: moderateScale(10),
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginStart: moderateScale(60),
        borderRadius: 40
    },

    balanceAmmount: {
        color: Colors.WHITE,
        marginStart: moderateScale(5)
    },

    bookTextContainer: {
        marginStart: moderateScale(20),
        marginTop: verticalScale(20)
    },

    bookIndiaText: {
        color: Colors.WHITE,
        fontSize: scale(20),
        fontWeight: "500"
    },

    searchAreaContainer: {
        backgroundColor: "transparent",
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(40),
        borderRadius: 8,
        marginBottom: verticalScale(50)
    },
    tabArea: {
        height: verticalScale(430),
        backgroundColor: "transparent"
    },




});

export default HomeScreenStyles;