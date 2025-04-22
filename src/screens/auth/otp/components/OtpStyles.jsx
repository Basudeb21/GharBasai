import { Modal, StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

export default OtpStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.WHITE,
        paddingTop: verticalScale(60),
    },
    title: {
        fontSize: scale(20),
        fontWeight: '600',
        marginBottom: verticalScale(8),
    },
    subtext: {
        fontSize: scale(14),
        color: '#333',
    },
    bold: {
        fontWeight: '600',
    },
    editNumber: {
        color: Colors.RED,
        marginVertical: verticalScale(12),
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: verticalScale(16),
    },
    otpInput: {
        width: moderateScale(45),
        height: verticalScale(50),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: scale(18),
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    resendText: {
        color: Colors.RED,
    },
    whatsappContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    whatsappIcon: {
        width: moderateScale(20),
        height: verticalScale(20),
        marginRight: moderateScale(6),
    },
    whatsappText: {
        color: '#0a66c2',
    },
    submitButton: {
        marginTop: verticalScale(30),
        backgroundColor: Colors.THEME_TRANSPARENT,
        paddingVertical: verticalScale(12),
        borderRadius: 8,
        alignItems: 'center',
    },
    submitText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
    },
})