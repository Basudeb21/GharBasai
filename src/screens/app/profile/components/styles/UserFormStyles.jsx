import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";

const UserFormStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100% "
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.THEME_TRANSPARENT,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        marginBottom: 12,
        backgroundColor: Colors.WHITE
    },
    subtext: {
        fontSize: 12,
        color: Colors.DISABLED_NAVIGATION_COLOR,
        marginBottom: 12,
        marginLeft: 4,
    },
    saveButton: {
        marginTop: 20,
        borderRadius: 30,
        paddingVertical: 6,
    },
    customButton: {
        backgroundColor: Colors.THEME,
        borderRadius: 30,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    customButtonText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default UserFormStyles;