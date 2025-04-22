import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../../constants/Colors';


const HeadStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.THEME,
        height: verticalScale(60),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: moderateScale(16),
    },
    sideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainLogo: {
        color: Colors.WHITE,
        fontSize: scale(18),
        fontWeight: "600",
    },

})

export default HeadStyles

