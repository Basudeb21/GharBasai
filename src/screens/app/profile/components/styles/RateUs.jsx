import { Modal, StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";


const RateUs = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#D6F0FF',
        borderRadius: 12,
        padding: 20,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: scale(16),
        fontWeight: 'bold',
        color: '#000',
    },
    subText: {
        fontSize: 14,
        color: '#4D4D4D',
        marginVertical: 4,
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: verticalScale(8),
        paddingHorizontal: moderateScale(10),
        borderRadius: 50,
        marginTop: verticalScale(10)
    },
    buttonText: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontWeight: 'bold',
    },
    iconBackground: {
        marginLeft: moderateScale(12),
    },
    iconHint: {
        fontSize: scale(22),
        opacity: 0.2,
    },
});

export default RateUs;