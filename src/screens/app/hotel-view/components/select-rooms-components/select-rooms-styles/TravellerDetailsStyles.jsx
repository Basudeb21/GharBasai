import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const TravellerDetailsStyles = StyleSheet.create({
    container: {
        marginTop: verticalScale(20)
    },
    headRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: moderateScale(25)
    },
    headText: {
        fontSize: scale(18),
        fontWeight: "600"
    },
    primaryTxt: {
        color: Colors.BLUE,
        fontWeight: "600"
    },
    subTxt: {
        color: Colors.FADE,
        marginStart: moderateScale(25),
        fontSize: scale(12),
        fontWeight: "400",
        marginTop: verticalScale(6)
    },
    detailsBox: {
        marginHorizontal: moderateScale(20),
        backgroundColor: Colors.WHITE,
        marginVertical: verticalScale(20),
        paddingBottom: verticalScale(20),
        borderRadius: scale(12),
        elevation: scale(2),
        paddingTop: verticalScale(10)
    },
    inputParent: {
        paddingHorizontal: moderateScale(20)
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
        color: Colors.CREDENTIAL_ACTIVE_TEXT
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagPicker: {
        marginRight: 8,
    },
    codeText: {
        fontSize: 16,
        marginRight: 6,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
    },
    phoneInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.THEME,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },

    countrySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },

    codeText: {
        marginLeft: 4,
        fontSize: 16,
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
    },

    phoneInput: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 50,
        paddingLeft: 0,
    },
});

export default TravellerDetailsStyles;