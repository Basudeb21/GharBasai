import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const BannerStyle = StyleSheet.create({
    banner: {
        width: "100%",
        height: verticalScale(180)
    }
});

export default BannerStyle;