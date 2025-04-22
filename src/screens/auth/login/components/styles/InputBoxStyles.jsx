import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../constants/Colors";


export default InputBoxStyles = StyleSheet.create({
    loginCredStyle: {
        marginHorizontal: moderateScale(20),
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.THEME,
        marginTop: verticalScale(10)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },

    codeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },

    countryCodeText: {
        fontSize: 14,
        marginLeft: 5,
    },


})