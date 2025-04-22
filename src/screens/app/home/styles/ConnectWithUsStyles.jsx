import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../../constants/Colors';


const CWUStyles = StyleSheet.create({
    card: {
        marginHorizontal: moderateScale(30),
        marginVertical: verticalScale(10),
        padding: scale(10),
        borderRadius: 20,
        elevation: 2,
        backgroundColor: Colors.THEME_TRANSPARENT,
        flexDirection: "row"
    },
    logoContainer: {
        flex: 1,
        marginEnd: moderateScale(10),
        alignItems: "center",
        justifyContent: "center"
    },
    detailsBox: {
        flex: 9,
        maxWidth: '95%',
    },
    head: {
        color: Colors.WHITE,
        fontSize: scale(15),
        fontWeight: "600",
        marginBottom: verticalScale(5)
    },
    bodyTxt: {
        color: Colors.WHITE,
        flexWrap: 'wrap',
    }
})

export default CWUStyles

