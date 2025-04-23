import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import PriceCardStyles from './select-rooms-styles/PriceCardStyles'
import SelectedBtn from './SelectedBtn'
import SelectBtn from './SelectBtn'

const PriceCard = () => {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <View style={PriceCardStyles.container}>
            <View style={PriceCardStyles.left}>
                <Text style={PriceCardStyles.headTxt}>Room only</Text>
                <Text style={PriceCardStyles.facilityTxt}>Non refundable</Text>
            </View>
            <View style={PriceCardStyles.right}>
                <Text style={PriceCardStyles.price}>₹ 2,626</Text>
                <Text style={PriceCardStyles.gst}>+₹ 316 GST</Text>
                <Text style={PriceCardStyles.dayCount}>Per night</Text>
                <TouchableOpacity onPress={() => setIsSelected(prev => !prev)}>
                    {isSelected == true ? <SelectedBtn /> : <SelectBtn />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PriceCard