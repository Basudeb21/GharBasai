import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const BestDealsStyles = StyleSheet.create({
    container: {
        marginStart: moderateScale(20),
        marginBottom: verticalScale(30)
    },
    dealsText: {
        fontSize: scale(14),
        fontWeight: "500",
        marginBottom: verticalScale(20)
    },
    card: {
        width: moderateScale(300),
        height: verticalScale(150),
        marginEnd: moderateScale(10),
    },
    bgImage: {
        borderRadius: scale(20),
        opacity: 0.5,
    },
    tag: {
        backgroundColor: Colors.WHITE,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(15),
        borderRadius: scale(6),
        marginStart: moderateScale(40),
        marginTop: verticalScale(20)
    },
    tagTxt: {
        fontWeight: "600"
    },
    txtContainer: {
        marginStart: moderateScale(20),
        marginTop: verticalScale(40)
    },
    discountTxt: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontWeight: "900",
        fontSize: scale(20)
    },
    describtion: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontWeight: "300",
        fontSize: scale(20),
    }
});

export default BestDealsStyles;