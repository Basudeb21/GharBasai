import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../../constants/Colors';


const SearchInputStyles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 12,
        color: Colors.DARK_GRAY,
        marginBottom: 4,
    },
    input: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEACTIVE,
        paddingVertical: 6,
    },
    button: {
        backgroundColor: Colors.THEME,
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: verticalScale(10),
        marginHorizontal: moderateScale(30)
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.WHITE,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '600',
    }
});

export default SearchInputStyles;
