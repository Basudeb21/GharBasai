import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../../constants/Colors';


const ReviewStyles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.REVIEW_SCREEN_BG,
        alignItems: "center"
    },
    card: {
        backgroundColor: Colors.WHITE,
        marginBottom: verticalScale(20),
        width: "80%",
        borderRadius: scale(10)
    },
    topTxt: {
        color: Colors.CREDENTIAL_ACTIVE_TEXT,
        fontSize: scale(16),
        fontWeight: "600",
        marginStart: moderateScale(30),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(20)
    },
    topTxtHighLight: {
        color: Colors.THEME
    },
    reviewerParent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        color: Colors.WHITE,
        backgroundColor: Colors.THEME_TRANSPARENT,
        alignSelf: "flex-start",
        fontSize: scale(16),
        paddingVertical: verticalScale(8),
        paddingHorizontal: moderateScale(14),
        borderRadius: scale(100),
        margin: scale(10)
    },
    avatarParent: {
        flex: 2,
    },
    customerParent: {
        flex: 8,
    },
    customerName: {
        fontWeight: "500",
        fontSize: scale(14)
    },
    costomerStayedAt: {
        color: Colors.DISABLED_TXT,
    },
    comment: {
        paddingHorizontal: moderateScale(10),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(40)
    }
})

export default ReviewStyles

