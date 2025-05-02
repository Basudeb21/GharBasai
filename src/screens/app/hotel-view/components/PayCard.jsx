import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import PayCardStyles from '../styles/PayCardStyles';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../../../constants/NavigationString';

const PayCard = ({ isVisible, onClose }) => {
    const navigation = useNavigation();

    return (
        <Modal
            style={PayCardStyles.modal}
            isVisible={isVisible}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            swipeDirection="down"
            propagateSwipe={true}
            backdropTransitionOutTiming={0}
        >
            <View style={PayCardStyles.container}>
                <View style={PayCardStyles.cardTop} />
                <Text style={PayCardStyles.head}>You've selected Pay @ Hotel</Text>
                <Text style={PayCardStyles.warning}>*Subject to room availability.</Text>
                <View style={PayCardStyles.payAmountContainer}>
                    <View style={PayCardStyles.saveBox}>
                        <Text style={PayCardStyles.payNow}>Pay Now</Text>
                        <Text style={PayCardStyles.saveTxt}>Save ₹226</Text>
                    </View>
                    <Text style={PayCardStyles.ammount}> ₹2,824 </Text>
                </View>
                <View style={PayCardStyles.payAmountContainer}>
                    <View style={PayCardStyles.saveBox}>
                        <Text style={PayCardStyles.payNow}>Pay @ Hotel</Text>
                    </View>
                    <Text style={PayCardStyles.ammount}> ₹3,050 </Text>
                </View>
                <TouchableOpacity style={PayCardStyles.payNowBtn}>
                    <Text style={PayCardStyles.payNowBtnTxt}>Pay Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PayCardStyles.payHotelBtn}
                    onPress={() => navigation.navigate(NavigationString.BOOKIN_GENERATE)}>
                    <Text style={PayCardStyles.payHotelBtnTxt}>Continue With Pay @ Hotel</Text>
                </TouchableOpacity>
            </View>

        </Modal>
    );
};

export default PayCard