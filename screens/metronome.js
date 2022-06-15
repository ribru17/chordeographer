import { Audio } from "expo-av"
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState} from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Picker } from '@react-native-picker/picker'

export default function Metronome({ navigation }) {

    const [selectedBPM, setSelectedBPM] = useState('0')
    const [timer, setTimer] = useState(null)
    const [sound, setSound] = useState(new Audio.Sound)
    const [buttonVal, setButtonVal] = useState('Start')
    const [ac, setAC] = useState()
    const [step, setStep] = useState()

    useEffect(() => {
        return sound ? () => {
            sound.unloadAsync()
        } : undefined
    }, [sound])

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/metronometick.wav')
        )
        await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            
        })
        setSound(sound)
        await sound.playAsync()
    }
    
    function handlePickerChange(itemValue, itemIndex) {
        setSelectedBPM(itemValue)
    }

    function handleButtonPressed() {
        if (buttonVal === 'Start') {
            if (parseInt(selectedBPM) === 0) return
            setButtonVal('Stop')
            let b = MetronomeModule
            b.setBPM(50)
            b.start()
        } else {
            setButtonVal('Start')
            b.stop()
        }
    }

    function fillPicker() {
        let retval = []
        for (let i = 0; i < 241; i++) {
            retval.push(<Picker.Item label={i.toString()} value={i.toString()} key={i} />)
        }
        return retval
    }

    return (
        <View style={globalStyles.container}>
            <StatusBar style="auto" hidden />
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold'
            }}>BPM</Text>
            <Picker selectedValue={selectedBPM} onValueChange={handlePickerChange} style={{
                width: '50%'
            }}>
                {fillPicker()}
            </Picker>
            <Button title={buttonVal} onPress={handleButtonPressed} />
        </View>
    )
}