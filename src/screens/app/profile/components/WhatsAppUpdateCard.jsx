import { View, Text, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import WhatsApp from './styles/WhatsApp'
import Colors from '../../../../constants/Colors'


const WhatsAppUpdateCard = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={WhatsApp.container}>
            <View style={WhatsApp.leftContent}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png' }}
                    style={WhatsApp.icon}
                />
                <Text style={WhatsApp.text}>Get updates on WhatsApp</Text>
            </View>
            <Switch
                trackColor={{ false: '#ccc', true: Colors.BLUE }}
                thumbColor={isEnabled ? Colors.WHITE : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

        </View>
    )
}

export default WhatsAppUpdateCard